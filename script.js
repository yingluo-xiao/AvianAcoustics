/**
 * AvianAcoustics Archive — Site Interactions
 *
 * Features:
 *  - Navigation: scroll background + smooth scroll + mobile menu
 *  - Data table: row expand/collapse, column sorting, city filter
 */

document.addEventListener('DOMContentLoaded', function () {
  initNav();
  initTableRows();
  initSort();
  initFilter();
  initMobileMenu();
});

/* ── Navigation ─────────────────────────── */

function initNav() {
  var nav = document.getElementById('main-nav');

  // Solid background on scroll
  window.addEventListener('scroll', function () {
    if (window.scrollY > 60) {
      nav.classList.add('nav-scrolled');
    } else {
      nav.classList.remove('nav-scrolled');
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
      // Close mobile menu
      var menu = document.getElementById('mobile-menu');
      if (menu) menu.classList.add('hidden');
    });
  });
}

function initMobileMenu() {
  var btn = document.getElementById('mobile-toggle');
  var menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', function () {
      menu.classList.toggle('hidden');
    });
  }
}

/* ── Table Row Expand / Collapse ─────────── */

function initTableRows() {
  document.querySelectorAll('.data-row').forEach(function (row) {
    row.addEventListener('click', function () {
      var detail = row.nextElementSibling;
      if (detail && detail.classList.contains('detail-row')) {
        detail.classList.toggle('hidden');
      }
    });
  });
}

/* ── Table Column Sort ───────────────────── */

function initSort() {
  var table = document.getElementById('data-table');
  if (!table) return;

  var headers = table.querySelectorAll('th[data-sort]');
  var tbody = table.querySelector('tbody');
  var currentCol = -1;
  var ascending = true;

  headers.forEach(function (th, index) {
    th.addEventListener('click', function () {
      // Toggle direction if same column, else default ascending
      if (currentCol === index) {
        ascending = !ascending;
      } else {
        ascending = true;
        currentCol = index;
      }

      // Collect data rows (skip detail rows)
      var rows = Array.from(tbody.querySelectorAll('.data-row'));

      rows.sort(function (a, b) {
        var aText = a.children[index].textContent.trim();
        var bText = b.children[index].textContent.trim();

        // Try numeric comparison (strip commas)
        var aNum = parseFloat(aText.replace(/,/g, ''));
        var bNum = parseFloat(bText.replace(/,/g, ''));

        var cmp;
        if (!isNaN(aNum) && !isNaN(bNum)) {
          cmp = aNum - bNum;
        } else {
          cmp = aText.localeCompare(bText);
        }

        return ascending ? cmp : -cmp;
      });

      // Re-append sorted rows (data-row + its detail-row)
      rows.forEach(function (row) {
        var detail = row.nextElementSibling;
        tbody.appendChild(row);
        if (detail && detail.classList.contains('detail-row')) {
          tbody.appendChild(detail);
        }
      });

      // Visual indicator
      headers.forEach(function (h) { h.classList.remove('sort-active'); });
      th.classList.add('sort-active');
    });
  });
}

/* ── City Filter ─────────────────────────── */

function initFilter() {
  var buttons = document.querySelectorAll('.filter-btn');
  var dataRows = document.querySelectorAll('.data-row');

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = btn.dataset.filter;

      // Update active button
      buttons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      // Show / hide rows
      dataRows.forEach(function (row) {
        var group = row.dataset.group;
        var detail = row.nextElementSibling;
        var show = (filter === 'all' || group === filter);

        row.style.display = show ? '' : 'none';
        if (detail && detail.classList.contains('detail-row')) {
          if (!show) detail.classList.add('hidden');
          detail.style.display = show ? '' : 'none';
        }
      });
    });
  });
}
