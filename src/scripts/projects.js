

export default function projectsLoad(infos){
  console.log(infos["projects"])

  var codeBlock = '<h2 class="section-title dark-blue-text">Projects</h2>';

  var section = document.getElementById('projects_js');
  for (let index = 0; index < infos["projects"].length; index++) {
      const project = infos["projects"][index];
      var newProject='<!-- Notice: each .row is a project -->'+
            '<div class="row">'+
            '<div class="col-lg-4 col-sm-12">'+
            '<div class="project-wrapper__text load-hidden">'+
            '<h3 class="project-wrapper__text-title">'+project.name+'</h3>'+
              '<div>'+
                  '<p class="mb-4">'+
                      project.description
                  +'</p>'+
                  '</div>'+
                  '<a rel="noreferrer" target="_blank" class="cta-btn cta-btn--hero" href="'+project.linkLive+'">See Live</a>'+
                  '<a rel="noreferrer" target="_blank" class="cta-btn text-color-main" href="'+project.linkSource+'">Source Code</a>'+
                '</div>'+
              '</div>'+
              '<div class="col-lg-8 col-sm-12">'+
                '<div class="project-wrapper__image load-hidden">'+
                  '<a rel="noreferrer" href="'+project.linkSource+'" target="_blank">'+
                    '<div data-tilt data-tilt-max="4" data-tilt-glare="true" data-tilt-max-glare="0.5" class="thumbnail rounded js-tilt">'+
                      '<img alt="Project Image" class="img-fluid" src="'+project.image+'"/>'+
                    '</div>'+
                  '</a>'+
                '</div>'+
              '</div>'+
            '</div>'+
            '<!-- /END Project -->'

          codeBlock += newProject
  }

  document.getElementById('projects_js').innerHTML = codeBlock
}