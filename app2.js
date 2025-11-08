const textToBeCopied = document.querySelector('.textToBeCopied');
const copyButton = document.querySelector('.copyButton');
copyButton.addEventListener('click', function() {
  copyButton.classList.add('active');
  textToBeCopied.focus();
  textToBeCopied.select();
  document.execCommand('copy'); 
})