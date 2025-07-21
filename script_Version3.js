const form = document.getElementById('idForm');
const loader = document.getElementById('loader');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Hide result and show loader
    resultDiv.style.display = "none";
    loader.style.display = "block";

    // Get form data
    const name = document.getElementById('name').value.trim();
    const idNumber = document.getElementById('idNumber').value.trim();
    const dob = document.getElementById('dob').value;
    const idImage = document.getElementById('idImage').files[0];

    // Simulate detection delay and animation
    setTimeout(() => {
        loader.style.display = "none";

        // Demo logic (replace with AI/backend later!)
        let isFake = false;
        if (idNumber.length < 6 || !idImage) {
            isFake = true;
        }

        // Animated profile card
        resultDiv.style.display = "block";
        resultDiv.className = "result-card " + (isFake ? "fake" : "real");

        resultDiv.innerHTML = `
            <div style="margin-bottom: 8px;">
                <img src="${idImage ? URL.createObjectURL(idImage) : 'https://img.icons8.com/ios-filled/50/000000/user.png'}"
                    alt="ID Image"
                    style="width:60px;height:60px;border-radius:50%;border:3px solid #dd2a7b;box-shadow:0 2px 6px rgba(0,0,0,0.08);object-fit:cover;">
            </div>
            <div style="font-size:1.1em;font-weight:500;">${name ? name : 'Anonymous'}</div>
            <div style="font-size:0.95em;color:#888;margin-bottom:8px;">ID Number: <b>${idNumber ? idNumber : 'N/A'}</b></div>
            <div style="font-size:0.95em;color:#888;">DOB: <b>${dob ? dob : 'N/A'}</b></div>
            <hr style="margin:16px 0 10px 0;border:0;border-top:1px solid #eee;">
            <div style="font-size:1.15em;">
                <span style="font-weight:bold;">Result:</span>
                ${isFake ? "<span style='color:#d32f2f;'>Fake ID Detected!</span>" : "<span style='color:#388e3c;'>Real ID Detected!</span>"}
            </div>
        `;

        // Fade-in animation for result
        resultDiv.style.animation = "fadeResult 0.7s";
    }, 1800); // 1.8s animation delay for loader
});