/* Logan Rohner 
================================================================== */




/* Project cards
================================================================== */
(function() {


  if (document.querySelectorAll('.project')) {

    let x;

    let projects = document.querySelectorAll('.project')

    for (let i = 0; i < projects.length; i++) {
      let project = projects[i]
      let thumb = project.querySelector('.project_thumbnail')
      let next = project.querySelector('.project_next')
      let prev = project.querySelector('.project_prev')

      thumb.addEventListener('click', function() {
        x = i
        if (document.querySelector('.project_active')) {
          document.querySelector('.project_active').classList.remove('project_active')
        }
        project.classList.add('project_active');
        document.body.classList.add('project_overlay_active');
        
      })

      next.addEventListener('click', function() {
        
        i < projects.length - 1 ? x = ++i : x = 0;
        console.log(x)
        document.querySelector('.project_active').classList.remove('project_active')
        projects[x].classList.add('project_active')
      })

      prev.addEventListener('click', function() {
        i > 0 ? x = --i : x = projects.length - 1;
        document.querySelector('.project_active').classList.remove('project_active')
        projects[x].classList.add('project_active')
      })

    }
  

  }



  if (document.querySelector('.close_card')) {

    let closers = document.querySelectorAll('.close_card')

    for (let i = 0; i < closers.length; i++) {
      
      closers[i].addEventListener('click', function() {
        if (document.querySelector('.project_active')) {
          document.querySelector('.project_active').classList.remove('project_active');
          document.body.classList.remove('project_overlay_active');
        }
      })

    }

  }


  


})();




/* Contact overlay
================================================================== */
(function() {
  if (document.querySelector('.footer_link')) {
    let footerLink = document.querySelector('.footer_link') 
    footerLink.addEventListener('click', e => {
      e.preventDefault()
      document.body.classList.add('contact_active')
    })
  }
  if (document.querySelector('.close_contact')) {
    let contactClose = document.querySelector('.close_contact') 
    contactClose.addEventListener('click', e => {
      e.preventDefault()
      document.body.classList.remove('contact_active')
    })
  }
})();