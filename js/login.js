    // Lấy các phần tử
    const openPopupdangnhapButton = document.getElementById('openPopupdangnhap');
    const openPopupdangkyLink = document.getElementById('openPopupdangkyLink');
    const reopenPopupdangnhapLink = document.getElementById('reopenPopupdangnhap');
    const closePopupdangnhapButton = document.getElementById('closePopupdangnhap');
    const closePopupdangkyButton = document.getElementById('closePopupdangky');
    const popupdangnhap = document.getElementById('popupdangnhap');
    const popupdangky = document.getElementById('popupdangky');
    const overlay = document.getElementById('overlay');

    // Mở popupdangnhap khi bấm vào button
    openPopupdangnhapButton.addEventListener('click', () => {
        popupdangnhap.style.display = 'block';
        overlay.style.display = 'block';
    });

    // Mở popupdangky và đóng popupdangnhap khi bấm vào link trong popupdangnhap
    openPopupdangkyLink.addEventListener('click', (event) => {
        event.preventDefault(); // Ngăn chặn hành động mặc định của link
        popupdangnhap.style.display = 'none';
        popupdangky.style.display = 'block';
    });

    // Mở lại popupdangnhap và đóng popupdangky khi bấm vào link trong popupdangky
    reopenPopupdangnhapLink.addEventListener('click', (event) => {
        event.preventDefault(); // Ngăn chặn hành động mặc định của link
        popupdangky.style.display = 'none';
        popupdangnhap.style.display = 'block';
    });

    // Đóng popupdangnhap khi bấm nút đóng
    closePopupdangnhapButton.addEventListener('click', () => {
        popupdangnhap.style.display = 'none';
        overlay.style.display = 'none';
    });

    // Đóng dangky khi bấm nút đóng
    closePopupdangkyButton.addEventListener('click', () => {
        popupdangky.style.display = 'none';
        overlay.style.display = 'none';
    });

    // Đóng popup khi bấm vào nền mờ
    overlay.addEventListener('click', () => {
        popupdangnhap.style.display = 'none';
        popupdangky.style.display = 'none';
        overlay.style.display = 'none';
    });