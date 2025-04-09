document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    document.querySelectorAll('.list-group-item').forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? '' : 'none';
    });
});

document.getElementById('flexSwitchCheckDefault').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
document.querySelectorAll('iframe').forEach(iframe => {
    iframe.onload = () => {
        iframe.contentWindow.postMessage('{"method":"pause"}', '*');
    };
});