/* ==========================
   UAT Report – JSON-based
   ========================== */

// Global features list (loaded from JSON)
let featuresData = [];

/* ---------- DOM builders ---------- */
function addIssue(title, desc, status, imgPath) {
  const container = document.getElementById("issues-container");
  const number = container.children.length + 1;

  const div = document.createElement("div");
  div.className = "issue";

  // Safe defaults
  title = title || "(click to edit title)";
  desc  = desc  || "(click to edit description)";
  status = status || "Not Resolved";
  imgPath = imgPath || "";

  // Build issue block
  div.innerHTML = `
    <h3 contenteditable="true">${number}. ${escapeHtml(title)}</h3>
    <p contenteditable="true">${escapeHtml(desc)}</p>

    <div class="image-section">
      <input type="text"
        placeholder="Enter image path (e.g. images/issue1.png)"
        value="${escapeHtml(imgPath)}"
        onchange="updateImage(this)">
      <br>
      ${imgPath ? `<img src="${escapeHtml(imgPath)}" style="max-width:100%;">` : `<img src="" style="display:none; max-width:100%;">`}
    </div>

    <br>
    Status:
    <select onchange="updateSummary()">
      <option value="Resolved" ${status === "Resolved" ? "selected" : ""}>Resolved</option>
      <option value="Partially Resolved" ${status === "Partially Resolved" ? "selected" : ""}>Partially Resolved</option>
      <option value="Not Resolved" ${status === "Not Resolved" ? "selected" : ""}>Not Resolved</option>
    </select>
    <br>
    <button class="delete-btn" onclick="deleteIssue(this)">Delete</button>
  `;

  // Save on edits (hook summary refresh)
  const h3 = div.querySelector("h3");
  const p  = div.querySelector("p");
  const sel= div.querySelector("select");
  [h3, p, sel].forEach(el => el && el.addEventListener("input", () => updateSummary()));

  container.appendChild(div);
  updateSummary();
}

function renderFeatures(list) {
  const container = document.querySelector('.container');
  if (!container) return;

  const featTitle = document.createElement('div');
  featTitle.className = 'section-title';
  featTitle.textContent = 'New Features Required at Later Stage (Pending)';
  container.appendChild(featTitle);

  const featBox = document.createElement('div');
  featBox.id = 'features-container';
  featBox.style.marginBottom = '20px';

  list.forEach((f, idx) => {
    const d = document.createElement('div');
    d.className = 'issue';
    d.innerHTML = `
      <h3>${idx + 1}. ${escapeHtml(f.title)}</h3>
      <p>${escapeHtml(f.desc)}</p>
      <br>Status: <span style="font-weight:bold;">${escapeHtml(f.status)}</span>
    `;
    featBox.appendChild(d);
  });

  container.appendChild(featBox);
}

/* ---------- Helpers ---------- */
function updateImage(input) {
  const img = input.parentElement.querySelector('img');
  const path = input.value.trim();
  if (!img) return;
  img.src = path;
  img.style.display = path ? 'block' : 'none';
}

function deleteIssue(btn) {
  const issue = btn.closest('.issue');
  if (!issue) return;

  issue.remove();

  // Renumber remaining issues
  const container = document.getElementById('issues-container');
  Array.from(container.children).forEach((child, idx) => {
    const h3 = child.querySelector('h3');
    if (h3) {
      const text = h3.textContent.replace(/^\s*\d+\.\s*/, '');
      h3.textContent = `${idx + 1}. ${text}`;
      h3.setAttribute('contenteditable', 'true');
    }
  });

  updateSummary();
}

function updateSummary() {
  // Issues from DOM
  const issuesContainer = document.getElementById('issues-container');
  const issuesTotal = issuesContainer ? issuesContainer.children.length : 0;
  let issuesResolved = 0, issuesPartial = 0, issuesPending = 0;

  if (issuesContainer) {
    Array.from(issuesContainer.children).forEach(child => {
      const sel = child.querySelector('select');
      const status = sel ? sel.value : 'Not Resolved';
      if (/^Resolved$/i.test(status)) issuesResolved++;
      else if (/Partially/i.test(status)) issuesPartial++;
      else issuesPending++;
    });
  }

  // Features from loaded JSON
  const fList = Array.isArray(featuresData) ? featuresData : [];
  const featuresTotal = fList.length;
  const featuresResolved = fList.filter(f => /^Resolved$/i.test(f.status)).length;
  const featuresPartial  = fList.filter(f => /Partially/i.test(f.status)).length;
  const featuresPending  = featuresTotal - featuresResolved - featuresPartial;

  // Render summary table
  const summaryBox = document.querySelector('.summary-box');
  if (summaryBox) {
    summaryBox.innerHTML = `
      <table>
        <tr>
          <th>Issues</th>
          <th>Count</th>
          <th>Resolved</th>
          <th>Partially Resolved</th>
          <th>Pending</th>
        </tr>
        <tr>
          <td>Pending Issues</td>
          <td>${issuesTotal}</td>
          <td>${issuesResolved}</td>
          <td>${issuesPartial}</td>
          <td>${issuesPending}</td>
        </tr>
        <tr>
          <td>Feature to be Given Later</td>
          <td>${featuresTotal}</td>
          <td>${featuresResolved}</td>
          <td>${featuresPartial}</td>
          <td>${featuresPending}</td>
        </tr>
        <tr>
          <td>Total Issues</td>
          <td>${issuesTotal>${issuesResolved + featuresResolved}</td>
          <td>${issuesPartial + featuresPartial}</td>
          <td>${issuesPending + featuresPending}</td>
        </tr>
      </table>
    `;
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g,  '&lt;')
    .replace(/>/g,  '&gt;')
    .replace(/"/g,  '&quot;')
    .replace(/'/g,  '&#39;');
}

/* ---------- Build final report from LIVE DOM ---------- */
function snapshotIssuesFromDOM() {
  const container = document.getElementById("issues-container");
  if (!container) return [];
  return Array.from(container.children).map(child => {
    const title = (child.querySelector("h3")?.textContent || "")
                   .replace(/^\s*\d+\.\s*/, "");
    const desc  = child.querySelector("p")?.textContent || "";
    const sel   = child.querySelector("select");
    const status= sel ? sel.value : "Not Resolved";
    const imgEl = child.querySelector(".image-section img");
    const img   = imgEl && imgEl.style.display !== 'none'
                    ? (imgEl.getAttribute("src") || "")
                    : "";
    return { title, desc, status, img };
  });
}

function downloadFinal() {
  // Read the current, edited values from DOM
  const headerTitle = document.querySelector('.header h1')?.textContent || 'UAT REPORT';
  const headerSub   = document.querySelector('.header p')?.textContent || '';
  const issuesNow   = snapshotIssuesFromDOM();

  // Counts
  const issuesTotal    = issuesNow.length;
  const issuesResolved = issuesNow.filter(i => /^Resolved$/i.test(i.status)).length;
  const issuesPartial  = issuesNow.filter(i => /Partially/i.test(i.status)).length;
  const issuesPending  = issuesTotal - issuesResolved - issuesPartial;

  const featuresTotal    = featuresData.length;
  const featuresResolved = featuresData.filter(f => /^Resolved$/i.test(f.status)).length;
  const featuresPartial  = featuresData.filter(f => /Partially/i.test(f.status)).length;
  const featuresPending  = featuresTotal - featuresResolved - featuresPartial;

  const summaryHTML = `
    <table>
      <tr>
        <th>Issues</th>
        <th>Count</th>
        <th>Resolved</th>
        <th>Partially Resolved</th>
        <th>Pending</th>
      </tr>
      <tr>
        <td>Pending Issues</td>
        <td>${issuesTotal}</td>
        <td>${issuesResolved}</td>
        <td>${issuesPartial}</td>
        <td>${issuesPending}</td>
      </tr>
      <tr>
        <td>Feature to be Given Later</td>
        <td>${featuresTotal}</td>
        <td>${featuresResolved}</td>
        <td>${featuresPartial}</td>
        <td>${featuresPending}</td>
      </tr>
      <tr>
        <td>Total Issues</td>
        <td>${issuesTotal + featuresTotal}</td>
        <td>${issuesResolved + featuresResolved}</td>
        <td>${issuesPartial + featuresPartial}</td>
        <td>${issuesPending + featuresPending}</td>
      </tr>
    </table>
  `;

  const issuesHTML = issuesNow.map((it, idx) => `
    <div class="issue">
      <h3>${idx + 1}. ${escapeHtml(it.title)}</h3>
      <p>${escapeHtml(it.desc)}</p>
      ${it.img ? `<div class="image-section">${escapeHtml(it.img)}</div>` : ''}
      <br>Status: <span style="font-weight:bold;">${escapeHtml(it.status)}</span>
    </div>
  `).join('\n');

  const featuresHTML = featuresData.map((f, idx) => `
    <div class="issue">
      <h3>${idx + 1}. ${escapeHtml(f.title)}</h3>
      <p>${escapeHtml(f.desc)}</p>
      <br>Status: <span style="font-weight:bold;">${escapeHtml(f.status)}</span>
    </div>
  `).join('\n');

  const finalHtml = `<!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>${escapeHtml(headerTitle)}</title>
      style.css
    </head>
    <body>
      <div class="header">
        <h1>${escapeHtml(headerTitle)}</h1>
        <p>${escapeHtml(headerSub)}</p>
      </div>
      <div class="container">
        <div class="section-title">EXECUTIVE SUMMARY</div>
        <div class="summary-box">${summaryHTML}</div>

        <div class="section-title">PENDING ISSUES</div>
        <div id="issues-container">${issuesHTML}</div>

        <div class="section-title">New Features Required at Later Stage (Pending)</div>
        <div id="features-container">${featuresHTML}</div>
      </div>
    </body>
  </html>`;

  const blob = new Blob([finalHtml], { type: 'text/html' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url;
  a.download = 'Final_UAT_Report.html';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

/* ---------- Data loading (JSON) ---------- */
async function loadData() {
  const cacheBust = '20260227-01';
  const [issuesRes, featuresRes] = await Promise.all([
    fetch(`data/issues.json?v=${cacheBust}`),
    fetch(`data/features.json?v=${cacheBust}`)
  ]);

  if (!issuesRes.ok || !featuresRes.ok) {
    throw new Error('Failed to fetch data JSON.');
  }

  const [issues, features] = await Promise.all([issuesRes.json(), featuresRes.json()]);
  featuresData = Array.isArray(features) ? features : [];

  // Render issues
  (Array.isArray(issues) ? issues : []).forEach(i => {
    addIssue(i.title, i.desc, i.status, i.img);
  });

  // Render features section
  renderFeatures(featuresData);

  // Final summary
  updateSummary();
}

/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  loadData().catch(err => {
    console.error('Data load failed, page will load empty lists.', err);
    updateSummary();
  });
});
