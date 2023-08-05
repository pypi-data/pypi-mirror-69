'use strict';
/*
    Some basic js utilities for behaviours/patterns that I've come across many times.
    
    All of the functionality in this file is "opt-in" via custom html attributes (prefixed with qnc-).
    You should be able to include it on every page of your site.

    NOTE - these helpers rely on jQuery!
    jQuery is mostly used for its delegated event listeners. 
    If we want to drop jQuery requirement, we could implement our function to implement this pattern (would be trivial if we polyfilled element.matches and element.closest). 
*/


/*
    [qnc-link] -> make any element work like a link, as much as possible

    particulary useful on table rows

    use with tabindex="0"
    we also recommend setting draggable=true
    usage: <tr qnc-link="some_url/" tabindex="0" draggable></tr>

    Note: draggable makes text-selection impossible, so you may not want to set that attribute.
    Since we copy href on dragstart, though, it does enable useful "link-like" features:
        - drag link into text editor or email client
        - drag to url bar to open without referrer *
        - drag to tab bar to open in new tab *

        * chrome features, may or may not be implemented in other browsers
*/
$(document).on('click', '[qnc-link]', function(e) {
    // If they selected text in the "link", don't treat as a click
    if (getSelection() && !getSelection().isCollapsed) return
    // Only primary mouse button
    if (event.button != 0) return

    var url = this.getAttribute('qnc-link');
    if (e.metaKey || e.ctrlKey) {
        window.open(url, '_blank');
    }
    else {
        location = url;
    }
});
$(document).on('keypress', '[qnc-link]', function(e) {
    if (e.key != 'Enter') return

    // If they selected text in the "link", don't treat as a click
    if (getSelection() && !getSelection().isCollapsed) return
    var url = this.getAttribute('qnc-link');
    if (e.metaKey || e.ctrlKey) {
        window.open(url, '_blank');
    }
    else {
        location = url;
    }
});
// on drag, set data transfer to href of link
$(document).on('dragstart', '[qnc-link]', function(e) {
    var temp_link = document.createElement('a');
    temp_link.href = this.getAttribute('qnc-link');
    e.originalEvent.dataTransfer.setData('text', temp_link.href);
});


/*
    [qnc-replace-location] -> buttons that replace current history entry, rather than create a new one (like a link)
    
    Useful in multi-step forms/wizards, where you want to be able go "back" from any point to the page that launched the form

    Recommendation:
    If page A has a "replace link" to page B, then page B should have another "replace link" back to A (since the back button won't work).
*/
$(document).on('click', '[qnc-replace-location]', function(e) {
    // Before we call location.replace, update current url to our referrer
    // This is necessary for smart_back_button.js to work properly

    // resolve url relative to current page, before we update url
    var a = document.createElement('a');
    a.href = this.getAttribute('qnc-replace-location');
    var url = a.href;

    // try/catch, in case referrer is cross-origin
    try {
        history.replaceState(null, '', document.referrer);
    }
    catch (e) {}

    // replaceState is asynchronous, have to run in next iteration of run-loop for new page to have the updated referrer
    setTimeout(function() {
        location.replace(url);
    }, 0);
});

// [qnc-confirm-first] -> confirm before performing button actions
// Note that we attach handler on capturing phase, so that it runs as early as possible
document.addEventListener('click', function(e) {
    var $b = $(e.target).closest('[qnc-confirm-first]');
    if (!$b.length) return;

    if (!window.confirm($b[0].getAttribute('qnc-confirm-first'))) {
        e.preventDefault();
        e.stopPropagation();
    }
}, true);

// dynamically add row to formset (django)
// requires adding attributes to button, row template, row container/parent
$(document).on('click', '[qnc-add-row-to-formset]', function() {
    // Set this attribute to the form prefix on the add button
    var form_prefix = this.getAttribute('qnc-add-row-to-formset');
    // You have to add a template element (recommend <script type="text/template">)
    var $template = $('[qnc-formset-template="'+form_prefix+'"]');
    // You have to set this on the container of the formset forms 
    var $container = $('[qnc-formset-container="'+form_prefix+'"]');
    // This is an input in the management form
    var $form_count_input = $('#id_'+form_prefix+'-TOTAL_FORMS');

    $container.append($template.html().replace(/__prefix__/g, $form_count_input.val()));
    $form_count_input.val(1+parseInt($form_count_input.val()));
});

// for use with ajax_all_forms.js -------------------------------------------------------------------------------
// submit filter forms on any change
$(document).on('change', '[qnc-ajax-submit-on-change]', null, function(e) {
    ajax_submit_form(e.target.form);
});
// Some browsers don't trigger change event when pressing enter from text input, so listen to that, too
$(document).on('keyup', '[qnc-ajax-submit-on-change]', null, function(e) {
    if (e.key === 'Enter') {
        ajax_submit_form(e.target.form);
    }
});
// re-focus element (if it gets re-created) after form submission
(function() {
    var refocus_id = null;
    document.addEventListener('ajax_form_will_submit', function() {
        refocus_id = document.activeElement && document.activeElement.hasAttribute('qnc-ajax-form-refocus') && document.activeElement.id;
    });
    document.addEventListener('ajax_form_submission_complete', function() {
        var e = refocus_id && document.getElementById(refocus_id);
        e && e.focus();
    });
})();


/*
    Pop-ups/drop-downs

    Note - it might have made sense to implement this using the details element, but that has a couple issues:
        - screen reader support is still poor (even ChromeVox does a poor job)
        - not supported in IE, so polyfill is required
        - behaviour isn't quite the same as standard details element

    Required markup:
        - a button (or buttons) with qnc-popup-toggler="pop_up_id"
        - a container with qnc-popup="pop_up_id"

    What it does:
        - toggles aria-expanded on the toggle button
        - toggles display: none/block on the container
        - focuses first focusable element in popup upon open
        - closes popup when clicking outside of it
        - closes popup when moving focus outside of it
        - initializes pop-ups based on value of aria-expanded, assuming false if absent

    Note that qnc_crud.css includes:
        [qnc-popup] {display: none;}
    So that pop-ups are hidden at initial page load, before this script has a chance to run      
*/
(function() {
    var open_pid = undefined;
    function set_open_pid(pid) {
        if (pid === open_pid) return
        open_pid = pid;

        if (pid === null) {
            $('[qnc-popup]').hide();
            $('[qnc-popup-toggler]').attr('aria-expanded', 'false');
        }
        else {
            $('[qnc-popup='+pid+']').show();
            $('[qnc-popup]:not([qnc-popup='+pid+'])').hide();
            $('[qnc-popup-toggler='+pid+']').attr('aria-expanded', 'true');
            $('[qnc-popup-toggler]:not([qnc-popup-toggler='+pid+'])').attr('aria-expanded', 'false');

            // Focus first focusable child
            var children = $('[qnc-popup='+pid+']').find('*');
            for (var i = 0; i < children.length; i++) {
                if (children[i].tabIndex >= 0) {
                    children[i].focus();
                    break;
                }
            }
        }
    }

    $(document).on('click', function(e) {
        // if they clicked in a pop-up, do nothing
        if ($(e.target).closest('[qnc-popup]').length > 0) return

        // if they did not click an open button, close any open pop-up
        var $open_button = $(e.target).closest('[qnc-popup-toggler]');
        if ($open_button.length == 0) {
            set_open_pid(null);
            return
        }

        // They did click an open button
        // TOGGLE the pop-up it controls, hide any other open one
        var pid = $open_button[0].getAttribute('qnc-popup-toggler');
        if (pid !== open_pid) {
            set_open_pid(pid);
        }
        else {
            set_open_pid(null);
        }
    });
    $(document).on('focusin', function(e) {
        // No pop-up open
        if (open_pid === null) return

        // Focus remained in pop-up
        if ($(e.target).closest('[qnc-popup]').length > 0) return

        // Focus left the pop-up
        // There may be a simultaneous click event which will also close this pop-up (and possibly open another)
        // Make sure that happens before we close this one.
        // Note - it's surprising how long this delay must be - also, haven't tested in many browsers
        // I've tried various techniques, and I can't seem to find a way to avoid this timeout
        var to_close = open_pid
        setTimeout(function() {
            if (open_pid == to_close) {
                set_open_pid(null);
            }
        }, 150);
    });
    // Initialize pop-ups
    var _open = $('[qnc-popup-toggler][aria-expanded]').attr('[qnc-popup-toggler');
    set_open_pid(_open === undefined ? null : _open);

    
    /*
        Opening on hover

        By default, qnc-popups do not open on hover, unless you add [qnc-popup-hover]
        (you set this on the popup, NOT the toggler - a single popup may have multiple togglers)

        Notes - mouseenter and mouseleave do not bubble

        We could use a delegated event listener, listening on capture phase of mouseenter/leave, or listening on bubble phase of mouseover/exit, but that would be a bit of a performance issue, even if the site didn't use any hover popups.

        For performance's sake, we bind direct event listeners only to those elements we find at dom load.
        Users must call window.bind_qnc_popup_hover_listeners() if they add hover popups to the DOM dynamically.
    */
    var mouse_left_hover_pid = null;
    var mouse_left_hover_popup_timeout = null;
    function close_hover_popup() {
        if (open_pid == mouse_left_hover_pid) set_open_pid(null);
    }
    function on_mouse_entered_hover_button(e) {
        var pid = e.target.getAttribute('qnc-popup-toggler');
        set_open_pid(pid);
    }
    function on_mouse_left_hover_button_or_popup(e) {
        mouse_left_hover_pid = open_pid;
        mouse_left_hover_popup_timeout = setTimeout(close_hover_popup, 200);
    }
    function on_mouse_entered_hover_button_or_popup(e) {
        clearTimeout(mouse_left_hover_popup_timeout);
    }
    // if users dynamically add hover popups to the page, they must call this function
    // IDEMPOTENT
    window.bind_qnc_popup_hover_listeners = function() {
        $('[qnc-popup][qnc-popup-hover]').each(function(index, element) {
            element.addEventListener('mouseenter', on_mouse_entered_hover_button_or_popup);
            element.addEventListener('mouseleave', on_mouse_left_hover_button_or_popup);

            var pid = element.getAttribute('qnc-popup');
            $('[qnc-popup-toggler='+pid+']').on('mouseenter', on_mouse_entered_hover_button);
            $('[qnc-popup-toggler='+pid+']').on('mouseenter', on_mouse_entered_hover_button_or_popup);
            $('[qnc-popup-toggler='+pid+']').on('mouseleave', on_mouse_left_hover_button_or_popup);
        });
    }
    bind_qnc_popup_hover_listeners();
})();