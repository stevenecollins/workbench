$('#showLeftMenu').click( function() {
  $("#leftMenu").toggleClass("menu-open");
});

//Tabs
$(document).ready(function(){
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
});

// Modal
$('.modal-toggle').on('click', function(e) {
  e.preventDefault();
  $('.saveReport').toggleClass('is-visible');
});
// Modal Snow Ticket
$('.modal-toggle2').on('click', function(e) {
  e.preventDefault();
  $('.snowTicket').toggleClass('is-visible');
});

// Accordion
$(".accordion-header").on("click", function (e) {

  var $target = $(e.target);
  var $accordion = $target.closest(".accordion");
  var $accordionBody = $accordion.children(".accordion-body");

  if ($accordionBody.is(":visible")) {
    $accordion.removeClass("show");
    $accordionBody.slideUp(150);
  } else {
    $accordion.addClass("show");
    $accordionBody.slideDown(150);
  }
});

$('.modal-rename').on('blur', function(e) {
  e.preventDefault();
  window.location.href = "reports-rename-results.html";
});

// Reports Folder accordion Filetree
$("fileTreeWrapper").find(".tree").fadeOut(0);

 $(".tree-title").click(function() {
   setStatus($(this));
 });

  /* Set the list opened or closed */
  function setStatus(node) {
   var elements = [];
   $(node).each(function() {
     elements.push($(node).nextAll());
   });
   for (var i = 0; i < elements.length; i++) {
     if (elements[i].css("display") == "none") {
       elements[i].fadeIn();
     } else {
       elements[i].fadeOut(0);
     }
   }
   if (elements[0].css("display") != "none") {
     $(node).addClass("active");
   } else {
     $(node).removeClass("active");
   }
  }



// Forms Inputs on create reports
$(function() {
    'use strict';

    var $ms = $('#msLoader, #msLoader1, #msLoader2, #msLoader3, #msLoader4');
    var items = 'Apple|Apricot|Avocado|Banana|Bilberry|Blackberry|Blackcurrant|Blueberry|Boysenberry|Currant|Cherry|Cherimoya|Cloudberry|Coconut|Cranberry|Damson|Date|Dragonfruit|Durian|Elderberry|Feijoa|Fig|Goji berry|Gooseberry|Grape|Raisin|Grapefruit|Guava|Huckleberry|Jabuticaba|Jackfruit|Jambul|Jujube|Juniper berry|Kiwifruit|Kumquat|Lemon|Lime'.split('|');
    var count = 0;
    var viewModel = {
      //selectedItems: [getItem(), getItem()]
    };

    function _postKnockoutRender (node, vm) {
      node.mui_multiselect({
        //slaveItems: [getItem()]
      });

      // console.log('%c !!!', 'color: green');
      // console.log(node.mui_multiselect('getOptions').slaveItems || node.mui_multiselect('getSlaveItems').toArray());

      setTimeout(function () {
        //node.mui_multiselect('setSlaveItems', vm.selectedItems);
        //vm.selectedItems = null;
      }, 500);
      setTimeout(function () {
        node.mui_multiselect('appendSlaveItems', [getItem()]);
      }, 700);
    }

    $('#add_left').on('click', function (e) {
        addTo(true);
    });

    $('#add_right').on('click', function (e) {
        addTo(false);
    });

    function getItem() {
      return {
        label: items[Math.floor(Math.random() * items.length)] + '__' + (count++)
      };
    }

    function addTo(toMaster) {

        var itemsToAdd = [ getItem(), getItem() ];

        if (toMaster === false) {
            // console.log('old', $ms.mui_multiselect('getSlaveItems'));
            $ms.mui_multiselect('appendSlaveItems', itemsToAdd);
            // console.log('new', $ms.mui_multiselect('getSlaveItems'));
        } else {
            $ms.mui_multiselect('appendMasterItems', itemsToAdd);
        }
        // console.log('--+', $ms.mui_multiselect('getOptions')[0]);
    }

    _postKnockoutRender($ms, viewModel);

    function _delayedAdd () {
      setTimeout(function () {
        addTo(false);

        if (count < 10) {
          _delayedAdd();
        }
      }, 1000);
    }

    $ms.mui_multiselect('appendMasterItems', [getItem(), getItem(), getItem()]);
    addTo(false);


    // console.log('<<', $ms.mui_multiselect('getMasterItems'));
    // console.log('<<', $ms.mui_multiselect('getSlaveItems'));
    // $ms.mui_multiselect('replaceOptions', { 'searchStatus': null });
    // console.log('<<', $ms.mui_multiselect('getMasterItems'));
    // console.log('<<', $ms.mui_multiselect('getSlaveItems'));
    //
    //
    // var mi = $ms.mui_multiselect('getMasterItems');
    // console.log(mi);
    // console.log(mi.length);
    // console.log(mi.size());
    // console.log(mi.toArray());
    // console.log('---');

    setTimeout(function () {
      _delayedAdd();
    }, 2000);
});

// Show Input on click

// $(document).on(click,'#duplicateRow',function(){
//   $(this).parents('#duplicater').append($(this).parent().clone());
// });

// document.getElementById('duplicateRow').onclick = duplicate;
//
// var i = 0;
// var original = document.getElementById('duplicater');
//
// function duplicate() {
//     var clone = original.cloneNode(true); // "deep" clone
//     clone.id = "duplicetor" + ++i; // there can only be one element with an ID
//     original.parentNode.appendChild(clone);
// };


