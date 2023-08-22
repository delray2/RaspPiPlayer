
        function selectSource(source) {
            // Implement logic to switch music source
            console.log('Selected source:', source);
        }

        function togglePlayPause() {
            // Implement logic to play/pause music
        }

        function seekRewind() {
            // Implement logic to seek/rewind
        }

        function showOutputPopup() {
            var popup = document.getElementById('output-popup');
            popup.style.display = popup.style.display === 'none' ? 'block' : 'none';
        }

        function selectOutput(output) {
            // Implement logic to switch output source
            console.log('Selected output:', output);
            showOutputPopup(); // Hide the popup
        }
    