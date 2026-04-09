(function initCarsystemUtils(global) {
  function getCurrentDateISO() {
    return new Date().toISOString().split('T')[0];
  }

  function addDaysToISO(dateValue, days = 0) {
    if (!dateValue) {
      return '';
    }
    const baseDate = new Date(`${dateValue}T00:00:00`);
    baseDate.setDate(baseDate.getDate() + Number(days || 0));
    return baseDate.toISOString().split('T')[0];
  }

  function getDiffDays(startDate, endDate) {
    if (!startDate || !endDate) {
      return null;
    }
    const start = new Date(`${startDate}T00:00:00`);
    const end = new Date(`${endDate}T00:00:00`);
    return Math.round((end - start) / 86400000);
  }

  function getDiffHoursFromNow(dateValue) {
    if (!dateValue) {
      return null;
    }
    const targetDate = new Date(`${dateValue}T00:00:00`);
    return (Date.now() - targetDate.getTime()) / 3600000;
  }

  function formatDisplayDateTime(dateValue) {
    if (!dateValue) {
      return 'N/D';
    }

    const parsedDate = new Date(dateValue);
    if (Number.isNaN(parsedDate.getTime())) {
      return dateValue;
    }

    return parsedDate.toLocaleString('es-DO', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  function formatDisplayDate(dateValue) {
    if (!dateValue) {
      return 'N/D';
    }

    const parsedDate = new Date(dateValue);
    if (Number.isNaN(parsedDate.getTime())) {
      return dateValue;
    }

    return parsedDate.toLocaleDateString('es-DO', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  }

  function formatCurrency(value, currency = 'RD$') {
    const amount = Number(value || 0);
    return `${currency} ${amount.toFixed(2)}`;
  }

  Object.assign(global, {
    getCurrentDateISO,
    addDaysToISO,
    getDiffDays,
    getDiffHoursFromNow,
    formatDisplayDateTime,
    formatDisplayDate,
    formatCurrency
  });
})(window);