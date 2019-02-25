﻿window.flexGrid = {
    showModal: function (modalName) {
        var modal = document.getElementById(modalName);
        var fadeDiv = document.createElement('div');
        fadeDiv.id = "fadeDiv";
        fadeDiv.className = "modal-backdrop fade show";

        modal.style.display = "block";        
        modal.parentNode.insertBefore(fadeDiv, modal.nextSibling);

        document.body.className = "modal-open";
        this.flexGrid.showedModal.name = modalName;

        return true;
    },

    hideModal: function (modalName) {
        var modal = document.getElementById(modalName);
        modal.style.display = "none";
        document.body.className = document.body.className.replace("modal-open", "");
        document.getElementById("fadeDiv").outerHTML = "";

        return true;
    },

    showedModal: {
        name: "None"
    }
}

document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (key === "Escape") {
        window.flexGrid.hideModal(window.flexGrid.showedModal.name);
    }    
});

    