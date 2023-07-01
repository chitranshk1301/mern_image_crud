export default function logout() {
    localStorage.removeItem('token');
    window.location.reload();
    window.location.href = '/';
}
