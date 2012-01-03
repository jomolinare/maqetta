define([
        "dojo/_base/connect"
], function(connect) {
return function() {
	this.create = function(widget) {
		var id = widget.dijitWidget.id,
			context = widget.getContext();
		widget._helperHandle = connect.subscribe("/davinci/ui/widgetSelected", null, function(selected) {
			var w = selected[0];
<<<<<<< HEAD
=======
			if (!w || w.getContext() != context) { return; }
>>>>>>> master
			while (w && w.id != id) {
				if (w._ownerId) {
					w = context.getDijit().registry.byId(w._ownerId);
				} else {
					w = w.getParent && w.getParent();
				}
			}

<<<<<<< HEAD
			var dialog = context.getDijit().registry.byId(id); // use widget
=======
			var dialog = context.getDijit().registry.byId(id);
>>>>>>> master
			if (w) {
				dialog.show();
			} else {
				dialog.hide();
			}
		}.bind(this));		
	};

	this.destroy = function(widget) {
		connect.unsubscribe(widget._helperHandle);
		delete widget._helperHandle;

		widget.dijitWidget.destroyRecursive();
	};

	/*
	 * Called by Outline palette whenever user toggles visibility by clicking on eyeball.
	 * @param {davinci.ve._Widget} widget  Widget whose visibility is being toggled
	 * @param {boolean} on  Whether given widget is currently visible
	 * @return {boolean}  whether standard toggle processing should proceed
	 */
	this.onToggleVisibility = function(widget, on) {
		return false;
	};
};
});
