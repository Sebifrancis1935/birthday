function loadDashboard() {

    const output = document.getElementById("output");

output.innerHTML = `
<div class="dashboard">

<div class="dashboard-title">
Operation Santhiyakka
</div>

<div class="dashboard-subtitle">
Mission Control Dashboard
</div>

<div class="status-panel">

<div class="status-item">
<h4>AI STATUS</h4>
<p class="online">ONLINE</p>
</div>

<div class="status-item">
<h4>TARGET</h4>
<p>Santhiyakka</p>
</div>

<div class="status-item">
<h4>MISSION</h4>
<p>READY</p>
</div>

<div class="status-item">
<h4>DATE</h4>
<p>16 Jul 2026</p>
</div>

</div>

<div class="mission-card">

<h3>Today's Mission</h3>

<p>
Celebrate one amazing human who always supports others,
spreads positivity, and deserves to smile today.
</p>

</div>

<button id="startMission">
🚀 Start Mission
</button>

</div>
`;

    document
        .getElementById("startMission")
        .addEventListener("click", () => {

loadIdentityScene();

        });

}