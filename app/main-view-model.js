var Observable = require("data/observable").Observable;
var frame = require('ui/frame');

function getMessage(counter) {
    if (counter <= 0) {
        return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    } else {
        return counter + " taps left";
    }
}

function createViewModel() {
    var viewModel = new Observable();
    viewModel.counter = 42;
    viewModel.message = getMessage(viewModel.counter);

    viewModel.onTap = function() {
        this.counter--;
        this.set("message", getMessage(this.counter));
    }

    viewModel.backTap = function () {
      frame.topmost().goBack();
    }

    return viewModel;
}



exports.createViewModel = createViewModel;