// Scroll down to anchor

// var $page = $('html, body');
// $('a[href*="#"]').click(function() {
//     $page.animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//     }, 400);
//     return false;
// });


// dropdown menu

$('.dropdown').click(function () {
  $(this).attr('tabindex', 1).focus();
  $(this).toggleClass('active');
  $(this).find('.dropdown-menu').slideToggle(300);
});

$('.dropdown').focusout(function () {
  $(this).removeClass('active');
  $(this).find('.dropdown-menu').slideUp(300);
});

$('.dropdown .dropdown-menu li').click(function () {
  $(this).parents('.dropdown').find('span').text($(this).text());
  $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});

// toggle use case view
$('.view-use-case-button').click(function() {
  // Replace splash image
  $('.overview-image').hide();
  $('.overview-image-2').show();
  // Replace button link & text change
  $('.tryiffree-button').hide();
  $('.followjourney-button').show();
  // Replace overview area text change
  $('.overview-tagline').html("Alice measures the impact of Resonance's housing offering and influences policy makers through beneficiary generated data");
  // $('.overview-button').html('Follow our journey');
  // Replace demo images title
  $('.demo-subtitle-1').html('Impact goals set');
  $('.demo-subtitle-2').html('Data uploaded');
  $('.demo-subtitle-3').html('Framework matched');
  // Replace demo images explanation
  $('.demo-detail-1').html("Resonance, alongside their impact measurement consultancy - Transformational Index(TI) - created their Propert Funds' projects and identified their impact goals");
  $('.demo-detail-2').html("TI conducts surveys with Resonance's tenants on a quarterly basis. Tenants' answers were uploaded in a simple excel format on Alice");
  $('.demo-detail-3').html("Resonance benchmarks the impact of their work against Big Society Capital’s SROI framework. The insights genereated formed a strong case for Resonance to affect policies that will eradicate homelessness in the UK.")
  // Hide section-4 title
  $('.application-section-title').hide();
  // Replace section-4 subtitle
  $('.section-sub-title').html("Resonance’s housing impact in </br> beautiful dashboards");
  $('.section-sub-title-2').html("Comparing performance</br>variables across Resonance’s funds");
  $('.section-tagline').html("Each impact goal is correlated with the uploaded data, and creates a dashboard of graphs with comparable variables.</br></br>Each dataset is then benchmarked with Big Society Capital’s SROI (Social Return on Investement) framework and specific ESGs (Environmental, Social, Governance principles), with adjustable targets. </br></br> The relevant framework integrations generate strong data-led cases for Resonance to: </br></br><div class='use-case-text'><div style='display: inline; color:#A26AE6; font-weight: 800; margin:20px 10px 0 0;'>></div>  affect governement policies to eradicate homelessness </div> <div class='use-case-text'><div style='display: inline; color:#A26AE6; font-weight: 800; margin-right:10px;'>></div>  prove SROI and ESG performance to investors</div>");
  $('.section-tagline-2').html("Resonance houses financially vulnerable individuals and families with the aim to empower them to move on to independent housing. To measure the tenants’ positive move on Alice analyses the tenants’ survey data and creates dashboards for each performance variable.</br></br>Every dashboard compares these variables across Resonance’s funds and identifies the demographics of beneficiaries that require further support.  As a result, Resonance creates  a strong data-led case to: </br> <div class='use-case-text'><div style='display: inline; color:#A26AE6; font-weight: 800;'>></div> secure further funding by investors and local authorities</div>");
  // Replace illustration
  $('.illustration-1').hide();
  $('.illustration-usecase-1').show();
  $('.application-overview-buttons').hide();
  $('.illustration-2').hide();
  $('.illustration-usecase-2').show();
  $('.overview-buttons-2').hide();
  // Replace newletter title
  $('.new-and-community-title').html("Let’s discuss your project")
  // Replace partner area
  $('.our-customer-title').hide();
  $('.our-customer-icons').hide();
  $('.our-funders-title').hide();
  $('.our-funders-icons').hide();
  $('.our-funders-icons-2').hide();
  $('.customer-review').show();
  $('.customer-review-2').show();
  // Hide 2nd row of Technical innovations (section-11)
  $('.technical-innovations-col-2').hide();
})