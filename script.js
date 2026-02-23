// ==========================
// ISSUE DATA (ALL 32) - full text updated per user report
// ==========================

const issuesData = [
    { title: "RC not visible in inspector dashboard", desc: "The RC form submitted by the DEO is not visible in inspector login for approval", status: "Not Resolved", img: "images/image22.png" },
    { title: "Print Document in Desired Format", desc: "After RC generation, there is no option to download the RC in the desired state-approved prescribed card format (PVC) with the state logo. The card is distributed to beneficiaries to avail their ration. The desired format details have already been shared via email.", status: "Not Resolved", img: "" },
    { title: "Scheme Change Option", desc: "In a verified and approved RC, the scheme ID is being changed but without e-Sign.", status: "Partially Resolved", img: "" },
    { title: "FPS ID not generated", desc: "After successful approval of a FPS application from DFSO login, the FPS ID is not being generated.", status: "Not Resolved", img: "images/image3.png" },
    { title: "Duplicate RC Numbers Generated", desc: "Already issued card numbers in epos website are being allocated to newly created cards. e.g. (055002989583). As communicated the issue is resolved as the RC numbers are generated based on the data till September month.", status: "Resolved", img: "" },
    { title: "AFSO user creation missing", desc: "No option to create user of AFSO in DFSO login. As per the flow for a RC, the RC goes to AFSO for final approval. Thus, option to create AFSO role is much needed in DFSO login.", status: "Not Resolved", img: "images/image3.png" },
    { title: "Split RC not reflecting", desc: "After submitting the split RC application from DEO login, the RC is not reflecting in inspector login dashboard.", status: "Not Resolved", img: "images/image4.png" },
    { title: "Ration Card Member Transfer", desc: "After successfully submitting the form (DEO Login) for member transfer, the request is not reflected in inspector login.", status: "Not Resolved", img: "" },
    { title: "Ration Card Member Transfer (Inter Taluka)", desc: "After successfully submitting the form (DEO Login) for RC transfer in Inter Taluka, the request is not reflected in inspector login.", status: "Not Resolved", img: "" },
    { title: "Ration Card Transfer Request (Intra Taluka)", desc: "After successfully submitting the form (DEO) for RC transfer in Intra Taluka, the request is not reflected in inspector login.", status: "Not Resolved", img: "" },
    { title: "Bank detail mandatory issue", desc: "Bank detail field should be mandatory while applying for a RC.", status: "Not Resolved", img: "images/image5.png" },
    { title: "Edit Form Redirect Issue", desc: "After the query back from inspector when the FPS application falls in DEO login for updation, the 'Edit form' button is redirecting to new RC application instead of FPS application.", status: "Not Resolved", img: "images/image5.png" },
    { title: "Language Restriction Issue", desc: "While creating a new RC, the Name field in English should allow entry in English language only. Where the local language is specified, the system should allow Hindi (Devanagari script) only. There should be a restriction that the 'Name' field in English must be entered in English language only, and where the local language is mentioned, it should be entered in Hindi (Devanagari script) only.", status: "Not Resolved", img: "images/image6.png" },
    { title: "History Section Issue", desc: "History section not working in AFSO login. We are unable to track activity.", status: "Resolved", img: "images/image7.png" },
    { title: "Disability year validation issue", desc: "While filling disability details, system is accepting 'disability since' value as any value e.g. A person DOB is entered as the year '2008' and we feed the disability year as '1949'. It should not accept because it later can create data discrepancies in RCMS.", status: "Not Resolved", img: "images/image8.png" },
    { title: "Aadhaar security issue", desc: "The search request is sending the full 12-digit Aadhaar number in plain text. It should be encrypted for security concerns.", status: "Not Resolved", img: "images/image9.png" },
    { title: "OTP verification missing", desc: "When creating a user, there is no option for OTP verification for user creation. Currently any random mobile number can be created for user creation.", status: "Not Resolved", img: "images/image10.png" },
    { title: "Server performance issue", desc: "The server is taking very long time to generate RC application forms. The issue needs to be addressed.", status: "Not Resolved", img: "images/image11.png" },
    { title: "Income mandatory issue", desc: "Income should be mandatory field.", status: "Not Resolved", img: "images/image12.png" },
    { title: "Citizenship field not mandatory", desc: "In current application, in FPS creation citizenship is not mandatory field. Application is being processed without entering citizenship.", status: "Not Resolved", img: "images/image13.png" },
    { title: "Duplicate Aadhaar in FPS", desc: "Same Aadhaar of FPS owner accepted in nominee also and working in new FPS creation. No restrictions made.", status: "Not Resolved", img: "images/image14.png" },
    { title: "Bulk Transfer Issue", desc: "The RCs which are bulk transferred from inspector login are not proceeding to AFSO for approval.", status: "Not Resolved", img: "" },
    { title: "Suspend RC issue", desc: "The uploaded document cannot be shown in inspector login and the date of RC generated is also missing. When the inspector query back to DEO, the form is not opening for edit in the given button 'edit form'.", status: "Not Resolved", img: "" },
    { title: "Revoke RC issue", desc: "After submitting the application for Revoke RC from inspector login it’s not proceeding to AFSO dashboard.", status: "Not Resolved", img: "" },
    { title: "Delete RC eSign issue", desc: "eSign button not functioning while deleting RC. The e-sign is not generated from AFSO but still it’s showing 'approved' in DEO login.", status: "Not Resolved", img: "" },
    { title: "Preview value mismatch", desc: "While making new Ration card 'Is your household with only one room with kutcha wall and roof' is selected as yes the same is not on the preview page. Its always shows as NO.", status: "Not Resolved", img: "images/image14.png" },
    { title: "Print issue in legacy data", desc: "The image of the HOF is not fetched in the PVC print of the legacy data. Also text of 'Invalid data' is being displayed at bottom of the card.", status: "Not Resolved", img: "images/image14.png" },
    { title: "Nominee RC validation issue", desc: "While adding nominee details for ration card the application number of current RC (not approved) is being accepted in the Nominee details.", status: "Not Resolved", img: "" },
    { title: "Query back image missing", desc: "Query back function not working properly in DEO login. The image uploaded by inspector while doing query back not visible in DEO login.", status: "Not Resolved", img: "images/image14.png" },
    { title: "Scheme dropdown mismatch", desc: "While changing scheme from AAY to PHH the dropdown values should be shown accordingly.", status: "Not Resolved", img: "images/image14.png" },
    { title: "Status mismatch issue", desc: "eSigned pending ration cards status showing in AFSO login as pending for approval while in DEO screen status displays as approved.", status: "Not Resolved", img: "" },
    { title: "Grievance Resolution not working", desc: "In the grievance portal generate resolution automatically based on the complaint. Show edit option also to users for his remarks.", status: "Not Resolved", img: "" }
];

// ==========================
// FEATURES DATA (8) - New features to be given later
// ==========================

const featuresData = [
    { title: "Integration of Face eKYC", desc: "Integrate UIDAI-compliant Face eKYC into the ration card application workflow.", status: "Not Resolved" },
    { title: "Enhanced Queue Options", desc: "Provide search and filter options within queues for priority beneficiaries like disabled or needy application for fast processing.", status: "Not Resolved" },
    { title: "Auto Detect Face While Uploading Image", desc: "Implement automatic face detection during image upload to validate presence of a human face and restrict non-face images.", status: "Not Resolved" },
    { title: "Mobile Number Modification Feature", desc: "Introduce a dedicated mobile number modification form to update beneficiary contact details at any time.", status: "Not Resolved" },
    { title: "Bank Account Modification Feature", desc: "Introduce a dedicated bank account modification form to update beneficiary bank details, including account number, IFSC code, and supporting documents.", status: "Not Resolved" },
    { title: "View Documents Submitted by Beneficiary", desc: "Provide a document viewing feature that allows users to view all documents submitted/uploaded by the beneficiary in his ration card.", status: "Not Resolved" },
    { title: "Blank RC template form", desc: "Provide option for citizen to download blank template ration card form so that they can physically fill and submit the form in the office.", status: "Not Resolved" },
    { title: "Dedicated Mobile App Development", desc: "Make the site mobile responsive or provide a dedicated mobile app for citizens to submit ration card applications.", status: "Not Resolved" }
];

// ==========================
// ADD ISSUE FUNCTION
// ==========================

function addIssue(title, desc, status, imgPath) {

    const container = document.getElementById("issues-container");
    const number = container.children.length + 1;

    const div = document.createElement("div");
    div.className = "issue";

    // Provide safe defaults when called without arguments
    title = title || "(click to edit title)";
    desc = desc || "(click to edit description)";
    status = status || "Not Resolved";
    imgPath = imgPath || "";

    div.innerHTML = `
        <h3 contenteditable="true">${number}. ${title}</h3>
        <p contenteditable="true">${desc}</p>

        <div class="image-section">
            <input type="text"
                   placeholder="Enter image path (e.g. images/issue1.png)"
                   value="${imgPath}"
                   onchange="updateImage(this)">
            <br>
            <img src="${imgPath}" style="display:${imgPath ? 'block':'none'}; max-width:100%;">
        </div>

        <br>
        Status:
        <select onchange="updateSummary()">
            <option value="Resolved" ${status==="Resolved"?"selected":""}>Resolved</option>
            <option value="Partially Resolved" ${status==="Partially Resolved"?"selected":""}>Partially Resolved</option>
            <option value="Not Resolved" ${status==="Not Resolved"?"selected":""}>Not Resolved</option>
        </select>

        <br>
        <button class="delete-btn" onclick="deleteIssue(this)">Delete</button>
    `;

    container.appendChild(div);
    // Ensure summary stays up-to-date after adding
    updateSummary();
}

// ==========================
// HELPER FUNCTIONS
// ==========================

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
    // renumber remaining issues
    const container = document.getElementById('issues-container');
    Array.from(container.children).forEach((child, idx) => {
        const h3 = child.querySelector('h3');
        if (h3) {
            // remove existing leading number if present
            const text = h3.textContent.replace(/^\s*\d+\.\s*/, '');
            h3.textContent = `${idx+1}. ${text}`;
            h3.setAttribute('contenteditable', 'true');
        }
    });
    updateSummary();
}

function updateSummary() {
    // Calculate counts for issues
    const issuesContainer = document.getElementById('issues-container');
    const issuesTotal = issuesContainer ? issuesContainer.children.length : 0;
    let issuesResolved = 0, issuesPartial = 0, issuesPending = 0;
    if (issuesContainer) {
        Array.from(issuesContainer.children).forEach(child => {
            const sel = child.querySelector('select');
            const status = sel ? sel.value : (child.querySelector('span') ? child.querySelector('span').textContent : 'Not Resolved');
            if (/^Resolved$/i.test(status)) issuesResolved++;
            else if (/Partially/i.test(status)) issuesPartial++;
            else issuesPending++;
        });
    }

    // Calculate counts for features (featuresData array)
    const featuresTotal = featuresData.length;
    let featuresResolved = 0, featuresPartial = 0, featuresPending = 0;
    featuresData.forEach(f => {
        if (/^Resolved$/i.test(f.status)) featuresResolved++;
        else if (/Partially/i.test(f.status)) featuresPartial++;
        else featuresPending++;
    });

    // Build summary table exactly as requested
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
            <td>${issuesTotal + featuresTotal}</td>
            <td>${issuesResolved + featuresResolved}</td>
            <td>${issuesPartial + featuresPartial}</td>
            <td>${issuesPending + featuresPending}</td>
            </tr>
            </table>
        `;
    }
}

function downloadFinal() {
    // Build a final HTML report (non-editable) and trigger download
    const headerTitle = document.querySelector('.header h1')?.textContent || 'UAT REPORT';
    const headerSub = document.querySelector('.header p')?.textContent || '';

        // Build summary from data arrays
        let issuesTotal = issuesData.length, issuesResolved = 0, issuesPartial = 0, issuesPending = 0;
        issuesData.forEach(i => {
                if (/^Resolved$/i.test(i.status)) issuesResolved++;
                else if (/Partially/i.test(i.status)) issuesPartial++;
                else issuesPending++;
        });

        const featuresTotal = featuresData.length; let featuresResolved = 0, featuresPartial = 0, featuresPending = 0;
        featuresData.forEach(f => {
                if (/^Resolved$/i.test(f.status)) featuresResolved++;
                else if (/Partially/i.test(f.status)) featuresPartial++;
                else featuresPending++;
        });

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

        // Build issues list from issuesData
        const issues = issuesData.map((it, idx) => {
                return `
                        <div class="issue">
                                <h3>${idx+1}. ${escapeHtml(it.title)}</h3>
                                <p>${escapeHtml(it.desc)}</p>
                                ${it.img ? `<div class="image-section"><img src="${escapeHtml(it.img)}" style="max-width:100%;"></div>` : ''}
                                <br>Status: <span style="font-weight:bold;">${escapeHtml(it.status)}</span>
                        </div>
                `;
        }).join('\n');

        // Build features list
        const features = featuresData.map((f, idx) => {
                return `
                        <div class="issue">
                                <h3>${idx+1}. ${escapeHtml(f.title)}</h3>
                                <p>${escapeHtml(f.desc)}</p>
                                <br>Status: <span style="font-weight:bold;">${escapeHtml(f.status)}</span>
                        </div>
                `;
        }).join('\n');

        const finalHtml = `<!doctype html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>${escapeHtml(headerTitle)}</title>
            <link rel="stylesheet" href="style.css">
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
                <div id="issues-container">${issues}</div>
                <div class="section-title">New Features Required at Later Stage (Pending)</div>
                <div id="features-container">${features}</div>
            </div>
        </body>
        </html>`;

    const blob = new Blob([finalHtml], {type: 'text/html'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Final_UAT_Report.html';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
}

function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ==========================
// LOAD ISSUES AFTER DOM READY
// ==========================

document.addEventListener("DOMContentLoaded", function () {
    // Populate issues
    issuesData.forEach(issue => {
        addIssue(issue.title, issue.desc, issue.status, issue.img);
    });

    // Add Features section below issues
    const container = document.querySelector('.container');
    if (container) {
        const featTitle = document.createElement('div');
        featTitle.className = 'section-title';
        featTitle.textContent = 'New Features Required at Later Stage (Pending)';
        container.appendChild(featTitle);

        const featBox = document.createElement('div');
        featBox.id = 'features-container';
        featBox.style.marginBottom = '20px';
        featuresData.forEach((f, idx) => {
            const d = document.createElement('div');
            d.className = 'issue';
            d.innerHTML = `<h3>${idx+1}. ${f.title}</h3><p>${f.desc}</p><br>Status: <span style="font-weight:bold;">${f.status}</span>`;
            featBox.appendChild(d);
        });
        container.appendChild(featBox);
    }

    updateSummary();
});