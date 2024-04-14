window.onload = function() {
            const urlParams = new URLSearchParams(window.location.search);
            const charityName = urlParams.get('charity');
            fetchProfile(charityName);
            document.getElementById('volunteer-now').addEventListener('click', function() {
                document.getElementById('volunteer-form').style.display = 'block';
            });
        };
document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); 
        submitForm();
    });


function fetchProfile(charityName) {

            const profiles = {
"Humane Society of Summit County": {
       profile: "<h2>Humane Society of Summit County</h2><p>The Humane 	Society of Summit County is a no-time-limit shelter meaning we do not 	ever euthanize for time or space. As long as the animal is medically and 	behaviorally healthy, it remains with us as long as it takes to be 	adopted. We partner with other animal welfare organizations and 	specialized rescues to help find loving homes for animals when 	appropriate.</p>",
       website: "https://www.summithumane.org/"
},

"Cleveland American Veterans Association": {
	profile: "<h2>Cleveland American Veterans Association</h2><p>C.A.V.A assists Veterans as they transition out of homelessness by providing all furnishings (including toiletries), moving services and taking responsibility to ensure the home is move-in ready.</p><p>Additionally, C.A.V.A. provides wartime Veterans assistance in attainment of Aid & Attendance Improved Pension Benefit offered through the Department of Veteran Affairs.</p>",
	website: "https://cava4vets.org/"
},

"Gifts of Kindness Fund": {
	profile:"<h2>Gifts of Kindness Fund</h2><p>Gifts of Kindness Fund assist donors and others in strengthening and improving our community for the benefit of all its residents.</p>",
	website: "https://columbusfoundation.org/stories-of-impact/gifts-of-kindness-fund"
},

"Lutheran Outdoor Ministries in Ohio": {
	profile:"<h2>Lutheran Outdoor Ministries in Ohio</h2><p>LOMO brings people together to experience Christ through our natural settings and programs. We live out our mission through the ministries of children, youth and family summer camp, environmental education, retreats and rental groups.</p><p>LOMO consists of four expressions of minsitry- Outreach, a traveling day camp program; Camp Luther, a family camp on Lake Erie; Camp Mowana, a youth summer and year round facility in Mansfield, OH; Lutheran Memorial camp, a year round summer camp, environmental education and retreat facility with 419 acres.</p>",
	website: "https://hopewoodoutdoors.org/"
},

            };

       const profileDiv = document.getElementById('charity-profile');
    const charityProfile = profiles[charityName];

    if (charityProfile) {
        profileDiv.innerHTML = charityProfile.profile;

        const websiteButton = document.createElement('button');
        websiteButton.textContent = 'Click here for the website';
        websiteButton.onclick = function() {
            window.location.href = charityProfile.website;
        };

        profileDiv.appendChild(websiteButton);
    } else {
        profileDiv.innerHTML = "<p>Profile information not available.</p>";
    }
}
function submitForm() {
    const formData = new FormData(document.getElementById('contact-form'));

    fetch('/submit-form', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            console.log('Email sent successfully');
        
        } else {
            console.error('Failed to send email');
          
        }
    })
    .catch(error => {
        console.error('Error sending email:', error);
        
    });
}
