document.addEventListener('DOMContentLoaded', function() {
  const menuItems = document.querySelectorAll('.btn_num');
  const sections = {
    vehicle: document.getElementById('vehicle-section'),
    spaceport: document.getElementById('spaceport-section'),
    capsule: document.getElementById('capsule-section')
  };

  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      menuItems.forEach(item => item.classList.remove('active'));
      this.classList.add('active');
      Object.values(sections).forEach(section => section.style.display = 'none');
      const section = sections[this.id];
      if (section) {
        section.style.display = 'block';
      }
    });
  });

  sections.vehicle.style.display = 'block';
  sections.spaceport.style.display = 'none';
  sections.capsule.style.display = 'none';
});
