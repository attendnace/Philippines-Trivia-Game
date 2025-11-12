document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.getElementById('download-button');
    const installButton = document.getElementById('install-button');
    const fetchApiButton = document.getElementById('fetch-api-button');
    const downloadModalClose = document.getElementById('download-modal-close');
    const downloadModalConfirm = document.getElementById('download-modal-confirm');
    
    downloadButton.addEventListener('click', function() {
        downloadAPK();
    });

    installButton.addEventListener('click', function() {
        showDownloadModal();
    });

    fetchApiButton.addEventListener('click', function() {
        fetchAPPKFromGitHub();
    });

    downloadModalClose.addEventListener('click', function() {
        downloadModalConfirm.style.display = 'none';
    });

    downloadModalConfirm.addEventListener('click', function() {
        downloadAPK();
    });

    // Download functionality
    function downloadAPK() {
        downloadAPKDialog().then(function(response) {
            if (response.success) {
                window.location.href = response.url;
            } else {
                alert('Download failed. Please try again.');
            }
        });
    }

    function showDownloadModal() {
        downloadModal.style.display = 'flex';
        downloadModalClose.style.display = 'none';
        downloadModalConfirm.style.display = 'none';
    }

    function fetchAPPKFromGitHub() {
        fetch('https://api.github.com/repos/your-app-name/your-app/releases/download/apk')
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    window.location.href = data.url;
                } else {
                    alert('Failed to fetch APK from GitHub. Please try again.');
                }
            })
            .catch(error => {
                alert('Error fetching APK. Please try again later.');
            });
    }
});
