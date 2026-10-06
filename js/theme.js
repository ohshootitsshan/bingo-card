(function () {
  'use strict';

  var themeStorageKey = 'bingoSiteTheme';
  var themes = ['simple','medieval', 'purple', 'literature'];
  var themeLabels = {
    simple: 'Simple',
    medieval: 'Medieval',
    purple: 'Purple',
    literature: 'Literature',
  };

  function applyTheme(nextTheme) {
    var theme = themes.indexOf(nextTheme) >= 0 ? nextTheme : 'simple';
    document.body.dataset.theme = theme;
    localStorage.setItem(themeStorageKey, theme);
    document.querySelectorAll('.site-theme-picker').forEach(function (picker) {
      picker.value = theme;
      picker.setAttribute('aria-label', 'Site theme: ' + themeLabels[theme]);
    });
  }

  var savedTheme = localStorage.getItem(themeStorageKey);
  applyTheme(savedTheme);
  document.querySelectorAll('.site-theme-picker').forEach(function (picker) {
    picker.addEventListener('change', function (event) {
      applyTheme(event.target.value);
    });
  });
  window.addEventListener('storage', function (event) {
    if (event.key === themeStorageKey) applyTheme(event.newValue);
  });
})();

window.WEEKLY_REPORT_EMAIL_CONFIG = {
  // Replace these placeholders with the values from your EmailJS account.
  publicKey: 'eq9gL4jYCpdVSBD3w',
  serviceId: 'service_e78h44k',
  templateId: 'template_khrggtq',
  recipient: 'shannnon.neumann@gmail.com'
};

const isWeeklyReportConfigured = (config) =>
  Object.values(config).every(value =>
    value === config.recipient
      ? typeof value === 'string' && value.trim() !== '' && !value.toLowerCase().includes('your-email')
      :
    typeof value === 'string' &&
    value.trim() !== '' &&
    !value.startsWith('YOUR_') &&
    value !== 'shannnon.neumann@gmail.com'
  );

if (window.emailjs && isWeeklyReportConfigured(window.WEEKLY_REPORT_EMAIL_CONFIG)) {
  window.emailjs.init({ publicKey: window.WEEKLY_REPORT_EMAIL_CONFIG.publicKey });
}

const getLogDate = (log) => {
  const timestamp = log.loggedAt || log.timestamp;
  const parsedDate = timestamp ? new Date(timestamp) : null;
  if (parsedDate && !Number.isNaN(parsedDate.getTime())) return parsedDate;

  const fallbackDate = new Date(Number(log.id));
  return Number.isNaN(fallbackDate.getTime()) ? null : fallbackDate;
};

const getCurrentWeekRange = (now = new Date()) => {
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const daysSinceMonday = (start.getDay() + 6) % 7;
  start.setDate(start.getDate() - daysSinceMonday);

  const end = new Date(start);
  end.setDate(end.getDate() + 7);

  return { start, end };
};

const formatLogDate = (date) =>
  date.toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' });

const sendWeeklyReport = async () => {
  const config = window.WEEKLY_REPORT_EMAIL_CONFIG;
  if (!isWeeklyReportConfigured(config)) {
    alert('Email reports are not configured yet. Add your EmailJS public key, service ID, template ID, and recipient in js/theme.js.');
    return;
  }

  if (!window.emailjs) {
    alert('The email service could not be loaded. Check your internet connection and try again.');
    return;
  }

  let logs;
  try {
    logs = JSON.parse(localStorage.getItem('health_logs') || '[]');
  } catch (error) {
    console.error('Could not read saved health logs for the weekly report.', error);
    alert('Could not read your saved logs, so the weekly report was not sent.');
    return;
  }

  if (!Array.isArray(logs)) {
    alert('Your saved log data is not in the expected format, so the weekly report was not sent.');
    return;
  }

  if (logs.some(log => !log || typeof log !== 'object' || Array.isArray(log))) {
    alert('Some saved log entries are invalid, so the weekly report was not sent.');
    return;
  }

  const { start, end } = getCurrentWeekRange();
  const weeklyLogs = logs
    .map(log => ({ log, date: getLogDate(log) }))
    .filter(entry => entry.date && entry.date >= start && entry.date < end)
    .sort((a, b) => b.date - a.date);

  const formattedLogs = weeklyLogs.length
    ? weeklyLogs.map(({ log, date }) => [
        `${formatLogDate(date)} — ${log.type === 'meal' ? 'Meal' : 'Symptom'}: ${log.name}`,
        log.ingredients ? `Ingredients: ${log.ingredients}` : '',
        log.notes ? `Notes: ${log.notes}` : ''
      ].filter(Boolean).join('\n')).join('\n\n')
    : 'No meals or symptoms logged this week.';

  const weekLabel = `${start.toLocaleDateString()} – ${new Date(end.getTime() - 1).toLocaleDateString()}`;
  const bingoState = localStorage.getItem('bingoState') || 'No bingo data found.';
  const templateParams = {
    to_email: config.recipient,
    subject: `Weekly Wellness Summary (${weekLabel})`,
    food_logs: formattedLogs,
    stats_summary: `${weeklyLogs.length} logs this week.\nBingo Status: ${bingoState}`
  };

  try {
    await window.emailjs.send(config.serviceId, config.templateId, templateParams);
    alert('Success! Your weekly report has been emailed to you. 💌');
  } catch (error) {
    console.error('Failed to send the weekly report.', error);
    alert('Failed to send the weekly report. Check your EmailJS service, template, and recipient settings.');
  }
};

document.getElementById('weekly-report-button')?.addEventListener('click', sendWeeklyReport);