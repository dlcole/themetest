exports.onNavigatingTo = function(args) {
    var page = args.object;
    // Propagate binding context from parent page to this page
    page.bindingContext = page.navigationContext.bindingContext;
}