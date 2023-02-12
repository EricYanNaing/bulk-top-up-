// *** 6.1_SINGLE TOP-UP JS ***

// *** 6.1b ***
function singleTopUp(){

    var serviceType = document.getElementById("service-type");
    var display_singleTopUp=serviceType.options[serviceType.selectedIndex].text;

    // *** Data-Plan is Selected ***
    if (display_singleTopUp === "Data Plan") {
        $("#submit-btn").addClass('d-none')

        $("#special-offer-input").addClass('d-none')
        $("#top-up-input").addClass('d-none')
        $("#top-up-table").addClass('d-none')
        $("#special-offer-table").addClass('d-none')
        $("#data-plan-input").removeClass('d-none')
        $("#data-plan-table").removeClass('d-none')
        console.log("OKay")
    }

    // *** Special Offer is Selected ***
    if (display_singleTopUp === "Special Offer") {
        $("#submit-btn").addClass('d-none')

        $("#data-plan-input").addClass('d-none')
        $("#top-up-input").addClass('d-none')
        $("#top-up-table").addClass('d-none')
        $("#data-plan-table").addClass('d-none')
        $("#special-offer-input").removeClass('d-none')
        $("#special-offer-table").removeClass('d-none')
        console.log("OKay")
    }

    // *** Top-Up is Selected ***
    if (display_singleTopUp === "Top Up") {
        $("#submit-btn").addClass('d-none')

        $("#special-offer-input").addClass('d-none')
        $("#data-plan-input").addClass('d-none')
        $("#data-plan-table").addClass('d-none')
        $("#special-offer-table").addClass('d-none')
        $("#top-up-table").removeClass('d-none')
        $("#top-up-input").removeClass('d-none')
        console.log("OKay")
    }
}
// *** Phone/Top Up plan Validtion ***
function operatorName(){

    if ($("#phone").val("") || $("#phone-one").val("") || $("#phone-two").val("")){
        console.log("Empty")
        $("#submit-btn").addClass('d-none')

        $("#mpt-valid-msg").addClass('d-none')
        $("#telenor-valid-msg").addClass('d-none')
        $("#ooredoo-valid-msg").addClass('d-none')
        $("#mytel-valid-msg").addClass('d-none')
        $("#mec-valid-msg").addClass('d-none')

        $("#mpt-invalid-msg").addClass('d-none')
        $("#telenor-invalid-msg").addClass('d-none')
        $("#ooredoo-invalid-msg").addClass('d-none')
        $("#mytel-invalid-msg").addClass('d-none')
        $("#mec-invalid-msg").addClass('d-none')
    }

    var operatorName = document.getElementById("operator-name");
    var display_operatorName=operatorName.options[operatorName.selectedIndex].text;

    // *** MPT is Selected ***
    if (display_operatorName === "MPT") {
        console.log("MPT")
        $("#phone").val("")
        $("#phone-one").val("")
        $("#phone-two").val("")

        $("#mpt-valid-msg").addClass('d-none')
        $("#telenor-valid-msg").addClass('d-none')
        $("#ooredoo-valid-msg").addClass('d-none')
        $("#mytel-valid-msg").addClass('d-none')
        $("#mec-valid-msg").addClass('d-none')

        $("#mpt-invalid-msg").addClass('d-none')
        $("#telenor-invalid-msg").addClass('d-none')
        $("#ooredoo-invalid-msg").addClass('d-none')
        $("#mytel-invalid-msg").addClass('d-none')
        $("#mec-invalid-msg").addClass('d-none')

        $("#dataPlan-mpt-valid-msg").addClass('d-none')
        $("#dataPlan-telenor-valid-msg").addClass('d-none')
        $("#dataPlan-ooredoo-valid-msg").addClass('d-none')
        $("#dataPlan-mytel-valid-msg").addClass('d-none')
        $("#dataPlan-mec-valid-msg").addClass('d-none')

        $("#dataPlan-mpt-invalid-msg").addClass('d-none')
        $("#dataPlan-telenor-invalid-msg").addClass('d-none')
        $("#dataPlan-ooredoo-invalid-msg").addClass('d-none')
        $("#dataPlan-mytel-invalid-msg").addClass('d-none')
        $("#dataPlan-mec-invalid-msg").addClass('d-none')

        $("#specialOffermpt-valid-msg").addClass('d-none')
        $("#specialOffertelenor-valid-msg").addClass('d-none')
        $("#specialOfferooredoo-valid-msg").addClass('d-none')
        $("#specialOffermytel-valid-msg").addClass('d-none')
        $("#specialOffermec-valid-msg").addClass('d-none')

        $("#specialOffermpt-invalid-msg").addClass('d-none')
        $("#specialOffertelenor-invalid-msg").addClass('d-none')
        $("#specialOfferooredoo-invalid-msg").addClass('d-none')
        $("#specialOffermytel-invalid-msg").addClass('d-none')
        $("#specialOffermec-invalid-msg").addClass('d-none')



        $("#phone").on("keyup",function () {
            let mobileNumber = document.getElementById("phone").value
            if (!mobileNumber === '' || mobileNumber.match(/^4[0-9]{8}$/)) {
                $("#mpt-invalid-msg").addClass('d-none')

                $("#telenor-invalid-msg").addClass('d-none')
                $("#ooredoo-invalid-msg").addClass('d-none')
                $("#mytel-invalid-msg").addClass('d-none')
                $("#mec-invalid-msg").addClass('d-none')

                $("#telenor-valid-msg").addClass('d-none')
                $("#ooredoo-valid-msg").addClass('d-none')
                $("#mytel-valid-msg").addClass('d-none')
                $("#mec-valid-msg").addClass('d-none')

                $("#submit-btn").removeClass('d-none')
                $("#mpt-valid-msg").removeClass('d-none')
            }else if(!mobileNumber === '' || mobileNumber.match(/^7[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#mpt-valid-msg").addClass('d-none')
                $("#telenor-valid-msg").addClass('d-none')
                $("#ooredoo-valid-msg").addClass('d-none')
                $("#mytel-valid-msg").addClass('d-none')
                $("#mec-valid-msg").addClass('d-none')

                $("#ooredoo-invalid-msg").addClass('d-none')
                $("#mytel-invalid-msg").addClass('d-none')
                $("#mec-invalid-msg").addClass('d-none')
                $("#mpt-invalid-msg").addClass('d-none')

                $("#telenor-invalid-msg").removeClass('d-none')
            }else if(!mobileNumber === '' || mobileNumber.match(/^9[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#mpt-valid-msg").addClass('d-none')
                $("#mpt-invalid-msg").addClass('d-none')
                $("#telenor-invalid-msg").addClass('d-none')
                $("#mytel-invalid-msg").addClass('d-none')
                $("#mec-invalid-msg").addClass('d-none')

                $("#telenor-valid-msg").addClass('d-none')
                $("#ooredoo-valid-msg").addClass('d-none')
                $("#mytel-valid-msg").addClass('d-none')
                $("#mec-valid-msg").addClass('d-none')

                $("#ooredoo-invalid-msg").removeClass('d-none')
            }else if(!mobileNumber === '' || mobileNumber.match(/^6[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#mpt-valid-msg").addClass('d-none')
                $("#telenor-invalid-msg").addClass('d-none')
                $("#mpt-invalid-msg").addClass('d-none')
                $("#ooredoo-invalid-msg").addClass('d-none')
                $("#mec-invalid-msg").addClass('d-none')

                $("#telenor-valid-msg").addClass('d-none')
                $("#ooredoo-valid-msg").addClass('d-none')
                $("#mytel-valid-msg").addClass('d-none')
                $("#mec-valid-msg").addClass('d-none')

                $("#mytel-invalid-msg").removeClass('d-none')
            }else if(!mobileNumber === '' || mobileNumber.match(/^3[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#mpt-valid-msg").addClass('d-none')
                $("#mpt-invalid-msg").addClass('d-none')
                $("#telenor-invalid-msg").addClass('d-none')
                $("#ooredoo-invalid-msg").addClass('d-none')
                $("#mytel-invalid-msg").addClass('d-none')

                $("#telenor-valid-msg").addClass('d-none')
                $("#ooredoo-valid-msg").addClass('d-none')
                $("#mytel-valid-msg").addClass('d-none')
                $("#mec-valid-msg").addClass('d-none')

                $("#mec-invalid-msg").removeClass('d-none')
            }
        })
        $("#phone-one").on("keyup",function () {
            let mobileNumberOne = document.getElementById("phone-one").value
            if (!mobileNumberOne === '' || mobileNumberOne.match(/^4[0-9]{8}$/)) {
                $("#dataPlan-mpt-invalid-msg").addClass('d-none')

                $("#dataPlan-telenor-invalid-msg").addClass('d-none')
                $("#dataPlan-ooredoo-invalid-msg").addClass('d-none')
                $("#dataPlan-mytel-invalid-msg").addClass('d-none')
                $("#dataPlan-mec-invalid-msg").addClass('d-none')

                $("#dataPlan-telenor-valid-msg").addClass('d-none')
                $("#dataPlan-ooredoo-valid-msg").addClass('d-none')
                $("#dataPlan-mytel-valid-msg").addClass('d-none')
                $("#dataPlan-mec-valid-msg").addClass('d-none')

                $("#submit-btn").removeClass('d-none')
                $("#dataPlan-mpt-valid-msg").removeClass('d-none')
            }else if(!mobileNumberOne === '' || mobileNumberOne.match(/^7[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#dataPlan-mpt-valid-msg").addClass('d-none')
                $("#dataPlan-telenor-valid-msg").addClass('d-none')
                $("#dataPlan-ooredoo-valid-msg").addClass('d-none')
                $("#dataPlan-mytel-valid-msg").addClass('d-none')
                $("#dataPlan-mec-valid-msg").addClass('d-none')

                $("#dataPlan-mpt-invalid-msg").addClass('d-none')
                $("#dataPlan-ooredoo-invalid-msg").addClass('d-none')
                $("#dataPlan-mytel-invalid-msg").addClass('d-none')
                $("#dataPlan-mec-invalid-msg").addClass('d-none')

                $("#dataPlan-telenor-invalid-msg").removeClass('d-none')
            }else if(!mobileNumberOne === '' || mobileNumberOne.match(/^9[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#dataPlan-mpt-valid-msg").addClass('d-none')
                $("#dataPlan-mpt-invalid-msg").addClass('d-none')
                $("#dataPlan-telenor-invalid-msg").addClass('d-none')
                $("#dataPlan-mytel-invalid-msg").addClass('d-none')
                $("#dataPlan-mec-invalid-msg").addClass('d-none')

                $("#dataPlan-telenor-valid-msg").addClass('d-none')
                $("#dataPlan-ooredoo-valid-msg").addClass('d-none')
                $("#dataPlan-mytel-valid-msg").addClass('d-none')
                $("#dataPlan-mec-valid-msg").addClass('d-none')

                $("#dataPlan-ooredoo-invalid-msg").removeClass('d-none')
            }else if(!mobileNumberOne === '' || mobileNumberOne.match(/^6[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#dataPlan-mpt-valid-msg").addClass('d-none')
                $("#dataPlan-mpt-invalid-msg").addClass('d-none')
                $("#dataPlan-telenor-invalid-msg").addClass('d-none')
                $("#dataPlan-ooredoo-invalid-msg").addClass('d-none')
                $("#dataPlan-mec-invalid-msg").addClass('d-none')

                $("#dataPlan-telenor-valid-msg").addClass('d-none')
                $("#dataPlan-ooredoo-valid-msg").addClass('d-none')
                $("#dataPlan-mytel-valid-msg").addClass('d-none')
                $("#dataPlan-mec-valid-msg").addClass('d-none')

                $("#dataPlan-mytel-invalid-msg").removeClass('d-none')
            }else if(!mobileNumberOne === '' || mobileNumberOne.match(/^3[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#dataPlan-mpt-valid-msg").addClass('d-none')
                $("#dataPlan-mpt-invalid-msg").addClass('d-none')
                $("#dataPlan-telenor-invalid-msg").addClass('d-none')
                $("#dataPlan-ooredoo-invalid-msg").addClass('d-none')
                $("#dataPlan-mytel-invalid-msg").addClass('d-none')

                $("#dataPlan-telenor-valid-msg").addClass('d-none')
                $("#dataPlan-ooredoo-valid-msg").addClass('d-none')
                $("#dataPlan-mytel-valid-msg").addClass('d-none')
                $("#dataPlan-mec-valid-msg").addClass('d-none')

                $("#dataPlan-mec-invalid-msg").removeClass('d-none')
            }
        })
        $("#phone-two").on("keyup",function () {
            let mobileNumberTwo = document.getElementById("phone-two").value
            if (!mobileNumberTwo === '' || mobileNumberTwo.match(/^4[0-9]{8}$/)) {
                $("#dataPlan-mpt-invalid-msg").addClass('d-none')

                $("#specialOffer-telenor-invalid-msg").addClass('d-none')
                $("#specialOffer-ooredoo-invalid-msg").addClass('d-none')
                $("#specialOffer-mytel-invalid-msg").addClass('d-none')
                $("#specialOffer-mec-invalid-msg").addClass('d-none')

                $("#specialOffer-telenor-valid-msg").addClass('d-none')
                $("#specialOffer-ooredoo-valid-msg").addClass('d-none')
                $("#specialOffer-mytel-valid-msg").addClass('d-none')
                $("#specialOffer-mec-valid-msg").addClass('d-none')

                $("#submit-btn").removeClass('d-none')
                $("#specialOffer-mpt-valid-msg").removeClass('d-none')
            }else if(!mobileNumberTwo === '' || mobileNumberTwo.match(/^7[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#specialOffer-mpt-valid-msg").addClass('d-none')
                $("#specialOffer-telenor-valid-msg").addClass('d-none')
                $("#specialOffer-ooredoo-valid-msg").addClass('d-none')
                $("#specialOffer-mytel-valid-msg").addClass('d-none')
                $("#specialOffer-mec-valid-msg").addClass('d-none')

                $("#specialOffer-mpt-invalid-msg").addClass('d-none')
                $("#specialOffer-ooredoo-invalid-msg").addClass('d-none')
                $("#specialOffer-mytel-invalid-msg").addClass('d-none')
                $("#specialOffer-mec-invalid-msg").addClass('d-none')

                $("#specialOffer-telenor-invalid-msg").removeClass('d-none')
            }else if(!mobileNumberTwo === '' || mobileNumberTwo.match(/^9[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#specialOffer-mpt-valid-msg").addClass('d-none')
                $("#specialOffer-mpt-invalid-msg").addClass('d-none')
                $("#specialOffer-telenor-invalid-msg").addClass('d-none')
                $("#specialOffer-mytel-invalid-msg").addClass('d-none')
                $("#specialOffer-mec-invalid-msg").addClass('d-none')

                $("#specialOffer-telenor-valid-msg").addClass('d-none')
                $("#specialOffer-ooredoo-valid-msg").addClass('d-none')
                $("#specialOffer-mytel-valid-msg").addClass('d-none')
                $("#specialOffer-mec-valid-msg").addClass('d-none')

                $("#specialOffer-ooredoo-invalid-msg").removeClass('d-none')
            }else if(!mobileNumberTwo === '' || mobileNumberTwo.match(/^6[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#specialOffer-mpt-valid-msg").addClass('d-none')
                $("#specialOffer-mpt-invalid-msg").addClass('d-none')
                $("#specialOffer-telenor-invalid-msg").addClass('d-none')
                $("#specialOffer-ooredoo-invalid-msg").addClass('d-none')
                $("#specialOffer-mec-invalid-msg").addClass('d-none')

                $("#specialOffer-telenor-valid-msg").addClass('d-none')
                $("#specialOffer-ooredoo-valid-msg").addClass('d-none')
                $("#specialOffer-mytel-valid-msg").addClass('d-none')
                $("#specialOffer-mec-valid-msg").addClass('d-none')

                $("#specialOffer-mytel-invalid-msg").removeClass('d-none')
            }else if(!mobileNumberTwo === '' || mobileNumberTwo.match(/^3[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#specialOffer-mpt-valid-msg").addClass('d-none')
                $("#specialOffer-mpt-invalid-msg").addClass('d-none')
                $("#specialOffer-telenor-invalid-msg").addClass('d-none')
                $("#specialOffer-ooredoo-invalid-msg").addClass('d-none')
                $("#specialOffer-mytel-invalid-msg").addClass('d-none')

                $("#specialOffer-telenor-valid-msg").addClass('d-none')
                $("#specialOffer-ooredoo-valid-msg").addClass('d-none')
                $("#specialOffer-mytel-valid-msg").addClass('d-none')
                $("#specialOffer-mec-valid-msg").addClass('d-none')

                $("#specialOffer-mec-invalid-msg").removeClass('d-none')
            }
        })
    }

    // *** TELENOR is Selected ***
    if (display_operatorName === "Telenor") {

        console.log("TELENOR")
        $("#phone").val("")
        $("#phone-one").val("")
        $("#phone-two").val("")

        $("#mpt-valid-msg").addClass('d-none')
        $("#telenor-valid-msg").addClass('d-none')
        $("#ooredoo-valid-msg").addClass('d-none')
        $("#mytel-valid-msg").addClass('d-none')
        $("#mec-valid-msg").addClass('d-none')

        $("#mpt-invalid-msg").addClass('d-none')
        $("#telenor-invalid-msg").addClass('d-none')
        $("#ooredoo-invalid-msg").addClass('d-none')
        $("#mytel-invalid-msg").addClass('d-none')
        $("#mec-invalid-msg").addClass('d-none')

        $("#dataPlan-mpt-valid-msg").addClass('d-none')
        $("#dataPlan-telenor-valid-msg").addClass('d-none')
        $("#dataPlan-ooredoo-valid-msg").addClass('d-none')
        $("#dataPlan-mytel-valid-msg").addClass('d-none')
        $("#dataPlan-mec-valid-msg").addClass('d-none')

        $("#dataPlan-mpt-invalid-msg").addClass('d-none')
        $("#dataPlan-telenor-invalid-msg").addClass('d-none')
        $("#dataPlan-ooredoo-invalid-msg").addClass('d-none')
        $("#dataPlan-mytel-invalid-msg").addClass('d-none')
        $("#dataPlan-mec-invalid-msg").addClass('d-none')

        $("#specialOffermpt-valid-msg").addClass('d-none')
        $("#specialOffertelenor-valid-msg").addClass('d-none')
        $("#specialOfferooredoo-valid-msg").addClass('d-none')
        $("#specialOffermytel-valid-msg").addClass('d-none')
        $("#specialOffermec-valid-msg").addClass('d-none')

        $("#specialOffermpt-invalid-msg").addClass('d-none')
        $("#specialOffertelenor-invalid-msg").addClass('d-none')
        $("#specialOfferooredoo-invalid-msg").addClass('d-none')
        $("#specialOffermytel-invalid-msg").addClass('d-none')
        $("#specialOffermec-invalid-msg").addClass('d-none')

        $("#phone").on("keyup",function () {
            let mobileNumber = document.getElementById("phone").value
            if (!mobileNumber === '' || mobileNumber.match(/^7[0-9]{8}$/)) {
                $("#mpt-invalid-msg").addClass('d-none')
                $("#ooredoo-invalid-msg").addClass('d-none')
                $("#mytel-invalid-msg").addClass('d-none')
                $("#mec-invalid-msg").addClass('d-none')
                $("#telenor-invalid-msg").addClass('d-none')

                $("#ooredoo-valid-msg").addClass('d-none')
                $("#mpt-valid-msg").addClass('d-none')
                $("#mytel-valid-msg").addClass('d-none')
                $("#mec-valid-msg").addClass('d-none')

                $("#submit-btn").removeClass('d-none')
                $("#telenor-valid-msg").removeClass('d-none')
            }else if(!mobileNumber === '' || mobileNumber.match(/^4[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#telenor-valid-msg").addClass('d-none')
                $("#telenor-invalid-msg").addClass('d-none')
                $("#ooredoo-invalid-msg").addClass('d-none')
                $("#mytel-invalid-msg").addClass('d-none')
                $("#mec-invalid-msg").addClass('d-none')

                $("#ooredoo-valid-msg").addClass('d-none')
                $("#mpt-valid-msg").addClass('d-none')
                $("#mytel-valid-msg").addClass('d-none')
                $("#mec-valid-msg").addClass('d-none')

                $("#mpt-invalid-msg").removeClass('d-none')
            }else if(!mobileNumber === '' || mobileNumber.match(/^9[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#telenor-valid-msg").addClass('d-none')
                $("#telenor-invalid-msg").addClass('d-none')
                $("#mpt-invalid-msg").addClass('d-none')
                $("#mytel-invalid-msg").addClass('d-none')
                $("#mec-invalid-msg").addClass('d-none')

                $("#ooredoo-valid-msg").addClass('d-none')
                $("#mpt-valid-msg").addClass('d-none')
                $("#mytel-valid-msg").addClass('d-none')
                $("#mec-valid-msg").addClass('d-none')

                $("#ooredoo-invalid-msg").removeClass('d-none')

            }else if(!mobileNumber === '' || mobileNumber.match(/^6[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#telenor-valid-msg").addClass('d-none')
                $("#telenor-invalid-msg").addClass('d-none')
                $("#ooredoo-invalid-msg").addClass('d-none')
                $("#mpt-invalid-msg").addClass('d-none')
                $("#mec-invalid-msg").addClass('d-none')

                $("#ooredoo-valid-msg").addClass('d-none')
                $("#mytel-valid-msg").addClass('d-none')
                $("#telenor-valid-msg").addClass('d-none')
                $("#mpt-valid-msg").addClass('d-none')


                $("#mytel-invalid-msg").removeClass('d-none')

            }else if(!mobileNumber === '' || mobileNumber.match(/^3[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#ooredoo-invalid-msg").addClass('d-none')
                $("#telenor-invalid-msg").addClass('d-none')
                $("#mytel-invalid-msg").addClass('d-none')
                $("#mpt-invalid-msg").addClass('d-none')

                $("#ooredoo-valid-msg").addClass('d-none')
                $("#mytel-valid-msg").addClass('d-none')
                $("#telenor-valid-msg").addClass('d-none')
                $("#mpt-valid-msg").addClass('d-none')
                $("#mec-valid-msg").addClass('d-none')

                $("#mec-invalid-msg").removeClass('d-none')

            }
        })
        $("#phone-one").on("keyup",function () {
            let mobileNumberOne = document.getElementById("phone-one").value
            if (!mobileNumberOne === '' || mobileNumberOne.match(/^7[0-9]{8}$/)) {
                $("#dataPlan-mpt-invalid-msg").addClass('d-none')
                $("#dataPlan-ooredoo-invalid-msg").addClass('d-none')
                $("#dataPlan-mytel-invalid-msg").addClass('d-none')
                $("#dataPlan-mec-invalid-msg").addClass('d-none')
                $("#dataPlan-telenor-invalid-msg").addClass('d-none')

                $("#dataPlan-ooredoo-valid-msg").addClass('d-none')
                $("#dataPlan-mpt-valid-msg").addClass('d-none')
                $("#dataPlan-mytel-valid-msg").addClass('d-none')
                $("#dataPlan-mec-valid-msg").addClass('d-none')

                $("#submit-btn").removeClass('d-none')
                $("#dataPlan-telenor-valid-msg").removeClass('d-none')
            }else if(!mobileNumberOne === '' || mobileNumberOne.match(/^4[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#dataPlan-telenor-valid-msg").addClass('d-none')
                $("#dataPlan-telenor-invalid-msg").addClass('d-none')
                $("#dataPlan-ooredoo-invalid-msg").addClass('d-none')
                $("#dataPlan-mytel-invalid-msg").addClass('d-none')
                $("#dataPlan-mec-invalid-msg").addClass('d-none')

                $("#dataPlan-ooredoo-valid-msg").addClass('d-none')
                $("#dataPlan-mpt-valid-msg").addClass('d-none')
                $("#dataPlan-mytel-valid-msg").addClass('d-none')
                $("#dataPlan-mec-valid-msg").addClass('d-none')

                $("#dataPlan-mpt-invalid-msg").removeClass('d-none')
            }else if(!mobileNumberOne === '' || mobileNumberOne.match(/^9[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#dataPlan-telenor-valid-msg").addClass('d-none')
                $("#dataPlan-telenor-invalid-msg").addClass('d-none')
                $("#dataPlan-mpt-invalid-msg").addClass('d-none')
                $("#dataPlan-mytel-invalid-msg").addClass('d-none')
                $("#dataPlan-mec-invalid-msg").addClass('d-none')

                $("#dataPlan-ooredoo-valid-msg").addClass('d-none')
                $("#dataPlan-mpt-valid-msg").addClass('d-none')
                $("#dataPlan-mytel-valid-msg").addClass('d-none')
                $("#dataPlan-mec-valid-msg").addClass('d-none')

                $("#dataPlan-ooredoo-invalid-msg").removeClass('d-none')

            }else if(!mobileNumberOne === '' || mobileNumberOne.match(/^6[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#dataPlan-telenor-invalid-msg").addClass('d-none')
                $("#dataPlan-ooredoo-invalid-msg").addClass('d-none')
                $("#dataPlan-mpt-invalid-msg").addClass('d-none')
                $("#dataPlan-mec-invalid-msg").addClass('d-none')

                $("#dataPlan-ooredoo-valid-msg").addClass('d-none')
                $("#dataPlan-mytel-valid-msg").addClass('d-none')
                $("#dataPlan-telenor-valid-msg").addClass('d-none')
                $("#dataPlan-mpt-valid-msg").addClass('d-none')
                $("#dataPlan-mec-valid-msg-valid-msg").addClass('d-none')


                $("#dataPlan-mytel-invalid-msg").removeClass('d-none')

            }else if(!mobileNumberOne === '' || mobileNumberOne.match(/^3[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#dataPlan-telenor-invalid-msg").addClass('d-none')
                $("#dataPlan-ooredoo-invalid-msg").addClass('d-none')
                $("#dataPlan-mytel-invalid-msg").addClass('d-none')
                $("#dataPlan-mpt-invalid-msg").addClass('d-none')

                $("#dataPlan-ooredoo-valid-msg").addClass('d-none')
                $("#dataPlan-mytel-valid-msg").addClass('d-none')
                $("#dataPlan-telenor-valid-msg").addClass('d-none')
                $("#dataPlan-mpt-valid-msg").addClass('d-none')

                $("#dataPlan-mec-invalid-msg").removeClass('d-none')

            }
        })
        $("#phone-two").on("keyup",function () {
            let mobileNumberTwo = document.getElementById("phone-two").value
            if (!mobileNumberTwo === '' || mobileNumberTwo.match(/^7[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#specialOffer-mpt-invalid-msg").addClass('d-none')
                $("#specialOffer-ooredoo-invalid-msg").addClass('d-none')
                $("#specialOffer-mytel-invalid-msg").addClass('d-none')
                $("#specialOffer-mec-invalid-msg").addClass('d-none')
                $("#specialOffer-telenor-invalid-msg").addClass('d-none')

                $("#specialOffer-ooredoo-valid-msg").addClass('d-none')
                $("#specialOffer-mpt-valid-msg").addClass('d-none')
                $("#specialOffer-mytel-valid-msg").addClass('d-none')
                $("#specialOffer-mec-valid-msg").addClass('d-none')

                $("#specialOffer-telenor-valid-msg").removeClass('d-none')
            }else if(!mobileNumberTwo === '' || mobileNumberTwo.match(/^4[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#specialOffer-telenor-valid-msg").addClass('d-none')
                $("#specialOffer-telenor-invalid-msg").addClass('d-none')
                $("#specialOffer-ooredoo-invalid-msg").addClass('d-none')
                $("#specialOffer-mytel-invalid-msg").addClass('d-none')
                $("#specialOffer-mec-invalid-msg").addClass('d-none')

                $("#specialOffer-ooredoo-valid-msg").addClass('d-none')
                $("#specialOffer-mpt-valid-msg").addClass('d-none')
                $("#specialOffer-mytel-valid-msg").addClass('d-none')
                $("#specialOffer-mec-valid-msg").addClass('d-none')

                $("#specialOffer-mpt-invalid-msg").removeClass('d-none')
            }else if(!mobileNumberTwo === '' || mobileNumberTwo.match(/^9[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#specialOffer-telenor-valid-msg").addClass('d-none')
                $("#specialOffer-telenor-invalid-msg").addClass('d-none')
                $("#specialOffer-mpt-invalid-msg").addClass('d-none')
                $("#specialOffer-mytel-invalid-msg").addClass('d-none')
                $("#specialOffer-mec-invalid-msg").addClass('d-none')

                $("#specialOffer-ooredoo-valid-msg").addClass('d-none')
                $("#specialOffer-mpt-valid-msg").addClass('d-none')
                $("#specialOffer-mytel-valid-msg").addClass('d-none')
                $("#specialOffer-mec-valid-msg").addClass('d-none')

                $("#specialOffer-ooredoo-invalid-msg").removeClass('d-none')

            }else if(!mobileNumberTwo === '' || mobileNumberTwo.match(/^6[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#specialOffer-telenor-invalid-msg").addClass('d-none')
                $("#specialOffer-ooredoo-invalid-msg").addClass('d-none')
                $("#specialOffer-mpt-invalid-msg").addClass('d-none')
                $("#specialOffer-mec-invalid-msg").addClass('d-none')

                $("#specialOffer-ooredoo-valid-msg").addClass('d-none')
                $("#specialOffer-mytel-valid-msg").addClass('d-none')
                $("#specialOffer-telenor-valid-msg").addClass('d-none')
                $("#specialOffer-mpt-valid-msg").addClass('d-none')
                $("#specialOffer-mec-valid-msg").addClass('d-none')


                $("#specialOffer-mytel-invalid-msg").removeClass('d-none')

            }else if(!mobileNumberTwo === '' || mobileNumberTwo.match(/^3[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#specialOffer-telenor-invalid-msg").addClass('d-none')
                $("#specialOffer-ooredoo-invalid-msg").addClass('d-none')
                $("#specialOffer-mytel-invalid-msg").addClass('d-none')
                $("#specialOffer-mpt-invalid-msg").addClass('d-none')

                $("#specialOffer-ooredoo-valid-msg").addClass('d-none')
                $("#specialOffer-mytel-valid-msg").addClass('d-none')
                $("#specialOffer-telenor-valid-msg").addClass('d-none')
                $("#specialOffer-mpt-valid-msg").addClass('d-none')

                $("#specialOffer-mec-invalid-msg").removeClass('d-none')

            }
        })
    }

    // *** OOREDOO is Selected ***
    if (display_operatorName === "Ooredoo") {

        console.log("OOREDOO")
        $("#phone").val("")
        $("#phone-one").val("")
        $("#phone-two").val("")

        $("#mpt-valid-msg").addClass('d-none')
        $("#telenor-valid-msg").addClass('d-none')
        $("#ooredoo-valid-msg").addClass('d-none')
        $("#mytel-valid-msg").addClass('d-none')
        $("#mec-valid-msg").addClass('d-none')

        $("#mpt-invalid-msg").addClass('d-none')
        $("#telenor-invalid-msg").addClass('d-none')
        $("#ooredoo-invalid-msg").addClass('d-none')
        $("#mytel-invalid-msg").addClass('d-none')
        $("#mec-invalid-msg").addClass('d-none')

        $("#dataPlan-mpt-valid-msg").addClass('d-none')
        $("#dataPlan-telenor-valid-msg").addClass('d-none')
        $("#dataPlan-ooredoo-valid-msg").addClass('d-none')
        $("#dataPlan-mytel-valid-msg").addClass('d-none')
        $("#dataPlan-mec-valid-msg").addClass('d-none')

        $("#dataPlan-mpt-invalid-msg").addClass('d-none')
        $("#dataPlan-telenor-invalid-msg").addClass('d-none')
        $("#dataPlan-ooredoo-invalid-msg").addClass('d-none')
        $("#dataPlan-mytel-invalid-msg").addClass('d-none')
        $("#dataPlan-mec-invalid-msg").addClass('d-none')

        $("#specialOffermpt-valid-msg").addClass('d-none')
        $("#specialOffertelenor-valid-msg").addClass('d-none')
        $("#specialOfferooredoo-valid-msg").addClass('d-none')
        $("#specialOffermytel-valid-msg").addClass('d-none')
        $("#specialOffermec-valid-msg").addClass('d-none')

        $("#specialOffermpt-invalid-msg").addClass('d-none')
        $("#specialOffertelenor-invalid-msg").addClass('d-none')
        $("#specialOfferooredoo-invalid-msg").addClass('d-none')
        $("#specialOffermytel-invalid-msg").addClass('d-none')
        $("#specialOffermec-invalid-msg").addClass('d-none')

        $("#phone").on("keyup",function () {
            let mobileNumber = document.getElementById("phone").value
            if (!mobileNumber === '' || mobileNumber.match(/^9[0-9]{8}$/)) {
                $("#mpt-invalid-msg").addClass('d-none')
                $("#ooredoo-invalid-msg").addClass('d-none')
                $("#mytel-invalid-msg").addClass('d-none')
                $("#mec-invalid-msg").addClass('d-none')
                $("#telenor-invalid-msg").addClass('d-none')

                $("#mpt-valid-msg").addClass('d-none')
                $("#telenor-valid-msg").addClass('d-none')
                $("#mytel-valid-msg").addClass('d-none')
                $("#mec-valid-msg").addClass('d-none')

                $("#submit-btn").removeClass('d-none')
                $("#ooredoo-valid-msg").removeClass('d-none')

            }else if(!mobileNumber === '' || mobileNumber.match(/^4[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#ooredoo-invalid-msg").addClass('d-none')
                $("#telenor-invalid-msg").addClass('d-none')
                $("#mytel-invalid-msg").addClass('d-none')
                $("#mec-invalid-msg").addClass('d-none')

                $("#mpt-valid-msg").addClass('d-none')
                $("#ooredoo-valid-msg").addClass('d-none')
                $("#telenor-valid-msg").addClass('d-none')
                $("#mytel-valid-msg").addClass('d-none')
                $("#mec-valid-msg").addClass('d-none')

                $("#mpt-invalid-msg").removeClass('d-none')
            }else if(!mobileNumber === '' || mobileNumber.match(/^7[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#ooredoo-invalid-msg").addClass('d-none')
                $("#mpt-invalid-msg").addClass('d-none')
                $("#mytel-invalid-msg").addClass('d-none')
                $("#mec-invalid-msg").addClass('d-none')

                $("#mpt-valid-msg").addClass('d-none')
                $("#ooredoo-valid-msg").addClass('d-none')
                $("#telenor-valid-msg").addClass('d-none')
                $("#mytel-valid-msg").addClass('d-none')
                $("#mec-valid-msg").addClass('d-none')

                $("#telenor-invalid-msg").removeClass('d-none')
            }else if(!mobileNumber === '' || mobileNumber.match(/^6[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#ooredoo-invalid-msg").addClass('d-none')
                $("#telenor-invalid-msg").addClass('d-none')
                $("#mpt-invalid-msg").addClass('d-none')
                $("#mec-invalid-msg").addClass('d-none')

                $("#mpt-valid-msg").addClass('d-none')
                $("#ooredoo-valid-msg").addClass('d-none')
                $("#telenor-valid-msg").addClass('d-none')
                $("#mytel-valid-msg").addClass('d-none')
                $("#mec-valid-msg").addClass('d-none')

                $("#mytel-invalid-msg").removeClass('d-none')
            }else if(!mobileNumber === '' || mobileNumber.match(/^3[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#ooredoo-invalid-msg").addClass('d-none')
                $("#mytel-invalid-msg").addClass('d-none')
                $("#mpt-invalid-msg").addClass('d-none')
                $("#telenor-invalid-msg").addClass('d-none')

                $("#mpt-valid-msg").addClass('d-none')
                $("#ooredoo-valid-msg").addClass('d-none')
                $("#telenor-valid-msg").addClass('d-none')
                $("#mytel-valid-msg").addClass('d-none')
                $("#mec-valid-msg").addClass('d-none')

                $("#mec-invalid-msg").removeClass('d-none')
            }
        })
        $("#phone-one").on("keyup",function () {
            console.log("hello")
            let mobileNumberOne = document.getElementById("phone-one").value
            if (!mobileNumberOne === '' || mobileNumberOne.match(/^9[0-9]{8}$/)) {
                $("#dataPlan-mpt-invalid-msg").addClass('d-none')
                $("#dataPlan-ooredoo-invalid-msg").addClass('d-none')
                $("#dataPlan-mytel-invalid-msg").addClass('d-none')
                $("#dataPlan-mec-invalid-msg").addClass('d-none')
                $("#dataPlan-telenor-invalid-msg").addClass('d-none')

                $("#dataPlan-mpt-valid-msg").addClass('d-none')
                $("#dataPlan-telenor-valid-msg").addClass('d-none')
                $("#dataPlan-mytel-valid-msg").addClass('d-none')
                $("#dataPlan-mec-valid-msg").addClass('d-none')

                $("#submit-btn").removeClass('d-none')
                $("#dataPlan-ooredoo-valid-msg").removeClass('d-none')

            }else if(!mobileNumberOne === '' || mobileNumberOne.match(/^4[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#dataPlan-ooredoo-invalid-msg").addClass('d-none')
                $("#dataPlan-telenor-invalid-msg").addClass('d-none')
                $("#dataPlan-mytel-invalid-msg").addClass('d-none')
                $("#dataPlan-mec-invalid-msg").addClass('d-none')

                $("#dataPlan-mpt-valid-msg").addClass('d-none')
                $("#dataPlan-ooredoo-valid-msg").addClass('d-none')
                $("#dataPlan-telenor-valid-msg").addClass('d-none')
                $("#dataPlan-mytel-valid-msg").addClass('d-none')
                $("#dataPlan-mec-valid-msg").addClass('d-none')

                $("#dataPlan-mpt-invalid-msg").removeClass('d-none')
            }else if(!mobileNumberOne === '' || mobileNumberOne.match(/^7[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#dataPlan-ooredoo-invalid-msg").addClass('d-none')
                $("#dataPlan-mpt-invalid-msg").addClass('d-none')
                $("#dataPlan-mytel-invalid-msg").addClass('d-none')
                $("#dataPlan-mec-invalid-msg").addClass('d-none')

                $("#dataPlan-mpt-valid-msg").addClass('d-none')
                $("#dataPlan-ooredoo-valid-msg").addClass('d-none')
                $("#dataPlan-telenor-valid-msg").addClass('d-none')
                $("#dataPlan-mytel-valid-msg").addClass('d-none')
                $("#dataPlan-mec-valid-msg").addClass('d-none')

                $("#dataPlan-telenor-invalid-msg").removeClass('d-none')
            }else if(!mobileNumberOne === '' || mobileNumberOne.match(/^6[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#dataPlan-ooredoo-invalid-msg").addClass('d-none')
                $("#dataPlan-telenor-invalid-msg").addClass('d-none')
                $("#dataPlan-mpt-invalid-msg").addClass('d-none')
                $("#dataPlan-mec-invalid-msg").addClass('d-none')

                $("#dataPlan-mpt-valid-msg").addClass('d-none')
                $("#dataPlan-telenor-valid-msg").addClass('d-none')
                $("#dataPlan-ooredoo-valid-msg").addClass('d-none')
                $("#dataPlan-mytel-valid-msg").addClass('d-none')
                $("#dataPlan-mec-valid-msg").addClass('d-none')

                $("#dataPlan-mytel-invalid-msg").removeClass('d-none')
            }else if(!mobileNumberOne === '' || mobileNumberOne.match(/^3[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#dataPlan-ooredoo-invalid-msg").addClass('d-none')
                $("#dataPlan-mytel-invalid-msg").addClass('d-none')
                $("#dataPlan-mpt-invalid-msg").addClass('d-none')
                $("#dataPlan-telenor-invalid-msg").addClass('d-none')

                $("#dataPlan-mpt-valid-msg").addClass('d-none')
                $("#dataPlan-telenor-valid-msg").addClass('d-none')
                $("#dataPlan-ooredoo-valid-msg").addClass('d-none')
                $("#dataPlan-mytel-valid-msg").addClass('d-none')
                $("#dataPlan-mec-valid-msg").addClass('d-none')

                $("#dataPlan-mec-invalid-msg").removeClass('d-none')
            }
        })
        $("#phone-two").on("keyup",function () {
            console.log("hello")
            let mobileNumberTwo = document.getElementById("phone-two").value
            if (!mobileNumberTwo === '' || mobileNumberTwo.match(/^9[0-9]{8}$/)) {
                $("#specialOffer-mpt-invalid-msg").addClass('d-none')
                $("#specialOffer-ooredoo-invalid-msg").addClass('d-none')
                $("#specialOffer-mytel-invalid-msg").addClass('d-none')
                $("#specialOffer-mec-invalid-msg").addClass('d-none')
                $("#specialOffer-telenor-invalid-msg").addClass('d-none')

                $("#specialOffer-mpt-valid-msg").addClass('d-none')
                $("#specialOffer-telenor-valid-msg").addClass('d-none')
                $("#specialOffer-mytel-valid-msg").addClass('d-none')
                $("#specialOffer-mec-valid-msg").addClass('d-none')

                $("#submit-btn").removeClass('d-none')
                $("#specialOffer-ooredoo-valid-msg").removeClass('d-none')

            }else if(!mobileNumberTwo === '' || mobileNumberTwo.match(/^4[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#specialOffer-ooredoo-invalid-msg").addClass('d-none')
                $("#specialOffer-telenor-invalid-msg").addClass('d-none')
                $("#specialOffer-mytel-invalid-msg").addClass('d-none')
                $("#specialOffer-mec-invalid-msg").addClass('d-none')

                $("#specialOffer-mpt-valid-msg").addClass('d-none')
                $("#specialOffer-ooredoo-valid-msg").addClass('d-none')
                $("#specialOffer-telenor-valid-msg").addClass('d-none')
                $("#specialOffer-mytel-valid-msg").addClass('d-none')
                $("#specialOffer-mec-valid-msg").addClass('d-none')

                $("#specialOffer-mpt-invalid-msg").removeClass('d-none')
            }else if(!mobileNumberTwo === '' || mobileNumberTwo.match(/^7[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#specialOffer-ooredoo-invalid-msg").addClass('d-none')
                $("#specialOffer-mpt-invalid-msg").addClass('d-none')
                $("#specialOffer-mytel-invalid-msg").addClass('d-none')
                $("#specialOffer-mec-invalid-msg").addClass('d-none')

                $("#specialOffer-mpt-valid-msg").addClass('d-none')
                $("#specialOffer-ooredoo-valid-msg").addClass('d-none')
                $("#specialOffer-telenor-valid-msg").addClass('d-none')
                $("#specialOffer-mytel-valid-msg").addClass('d-none')
                $("#specialOffer-mec-valid-msg").addClass('d-none')

                $("#specialOffer-telenor-invalid-msg").removeClass('d-none')
            }else if(!mobileNumberTwo === '' || mobileNumberTwo.match(/^6[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#specialOffer-ooredoo-invalid-msg").addClass('d-none')
                $("#specialOffer-telenor-invalid-msg").addClass('d-none')
                $("#specialOffer-mpt-invalid-msg").addClass('d-none')
                $("#specialOffer-mec-invalid-msg").addClass('d-none')

                $("#specialOffer-mpt-valid-msg").addClass('d-none')
                $("#specialOffer-ooredoo-valid-msg").addClass('d-none')
                $("#specialOffer-telenor-valid-msg").addClass('d-none')
                $("#specialOffer-mytel-valid-msg").addClass('d-none')
                $("#specialOffer-mec-valid-msg").addClass('d-none')

                $("#specialOffer-mytel-invalid-msg").removeClass('d-none')
            }else if(!mobileNumberTwo === '' || mobileNumberTwo.match(/^3[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#specialOffer-ooredoo-invalid-msg").addClass('d-none')
                $("#specialOffer-mytel-invalid-msg").addClass('d-none')
                $("#specialOffer-mpt-invalid-msg").addClass('d-none')
                $("#specialOffer-telenor-invalid-msg").addClass('d-none')

                $("#specialOffer-mpt-valid-msg").addClass('d-none')
                $("#specialOffer-ooredoo-valid-msg").addClass('d-none')
                $("#specialOffer-telenor-valid-msg").addClass('d-none')
                $("#specialOffer-mytel-valid-msg").addClass('d-none')
                $("#specialOffer-mec-valid-msg").addClass('d-none')

                $("#specialOffer-mec-invalid-msg").removeClass('d-none')
            }
        })
    }

    // *** MYTEL is Selected ***
    if (display_operatorName === "Mytel") {

        console.log("MYTEL")
        $("#phone").val("")
        $("#phone-one").val("")
        $("#phone-two").val("")

        $("#mpt-valid-msg").addClass('d-none')
        $("#telenor-valid-msg").addClass('d-none')
        $("#ooredoo-valid-msg").addClass('d-none')
        $("#mytel-valid-msg").addClass('d-none')
        $("#mec-valid-msg").addClass('d-none')

        $("#mpt-invalid-msg").addClass('d-none')
        $("#telenor-invalid-msg").addClass('d-none')
        $("#ooredoo-invalid-msg").addClass('d-none')
        $("#mytel-invalid-msg").addClass('d-none')
        $("#mec-invalid-msg").addClass('d-none')

        $("#dataPlan-mpt-valid-msg").addClass('d-none')
        $("#dataPlan-telenor-valid-msg").addClass('d-none')
        $("#dataPlan-ooredoo-valid-msg").addClass('d-none')
        $("#dataPlan-mytel-valid-msg").addClass('d-none')
        $("#dataPlan-mec-valid-msg").addClass('d-none')

        $("#dataPlan-mpt-invalid-msg").addClass('d-none')
        $("#dataPlan-telenor-invalid-msg").addClass('d-none')
        $("#dataPlan-ooredoo-invalid-msg").addClass('d-none')
        $("#dataPlan-mytel-invalid-msg").addClass('d-none')
        $("#dataPlan-mec-invalid-msg").addClass('d-none')

        $("#specialOffermpt-valid-msg").addClass('d-none')
        $("#specialOffertelenor-valid-msg").addClass('d-none')
        $("#specialOfferooredoo-valid-msg").addClass('d-none')
        $("#specialOffermytel-valid-msg").addClass('d-none')
        $("#specialOffermec-valid-msg").addClass('d-none')

        $("#specialOffermpt-invalid-msg").addClass('d-none')
        $("#specialOffertelenor-invalid-msg").addClass('d-none')
        $("#specialOfferooredoo-invalid-msg").addClass('d-none')
        $("#specialOffermytel-invalid-msg").addClass('d-none')
        $("#specialOffermec-invalid-msg").addClass('d-none')

        $("#phone").on("keyup",function () {
            let mobileNumber = document.getElementById("phone").value
            if (!mobileNumber === '' || mobileNumber.match(/^6[0-9]{8}$/)) {
                $("#mpt-invalid-msg").addClass('d-none')
                $("#ooredoo-invalid-msg").addClass('d-none')
                $("#mytel-invalid-msg").addClass('d-none')
                $("#mec-invalid-msg").addClass('d-none')
                $("#telenor-invalid-msg").addClass('d-none')

                $("#telenor-valid-msg").addClass('d-none')
                $("#mpt-valid-msg").addClass('d-none')
                $("#ooredoo-valid-msg").addClass('d-none')
                $("#mec-valid-msg").addClass('d-none')

                $("#submit-btn").removeClass('d-none')
                $("#mytel-valid-msg").removeClass('d-none')
            }else if(!mobileNumber === '' || mobileNumber.match(/^4[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#ooredoo-invalid-msg").addClass('d-none')
                $("#telenor-invalid-msg").addClass('d-none')
                $("#mytel-invalid-msg").addClass('d-none')
                $("#mec-invalid-msg").addClass('d-none')

                $("#telenor-valid-msg").addClass('d-none')
                $("#mpt-valid-msg").addClass('d-none')
                $("#ooredoo-valid-msg").addClass('d-none')
                $("#mytel-valid-msg").addClass('d-none')
                $("#mec-valid-msg").addClass('d-none')

                $("#mpt-invalid-msg").removeClass('d-none')

            }else if(!mobileNumber === '' || mobileNumber.match(/^7[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#ooredoo-invalid-msg").addClass('d-none')
                $("#mpt-invalid-msg").addClass('d-none')
                $("#mytel-invalid-msg").addClass('d-none')
                $("#mec-invalid-msg").addClass('d-none')

                $("#telenor-valid-msg").addClass('d-none')
                $("#mpt-valid-msg").addClass('d-none')
                $("#ooredoo-valid-msg").addClass('d-none')
                $("#mytel-valid-msg").addClass('d-none')
                $("#mec-valid-msg").addClass('d-none')

                $("#telenor-invalid-msg").removeClass('d-none')

            }else if(!mobileNumber === '' || mobileNumber.match(/^9[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#telenor-invalid-msg").addClass('d-none')
                $("#mpt-invalid-msg").addClass('d-none')
                $("#mytel-invalid-msg").addClass('d-none')
                $("#mec-invalid-msg").addClass('d-none')

                $("#telenor-valid-msg").addClass('d-none')
                $("#mpt-valid-msg").addClass('d-none')
                $("#ooredoo-valid-msg").addClass('d-none')
                $("#mytel-valid-msg").addClass('d-none')
                $("#mec-valid-msg").addClass('d-none')

                $("#ooredoo-invalid-msg").removeClass('d-none')

            }else if(!mobileNumber === '' || mobileNumber.match(/^3[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#ooredoo-invalid-msg").addClass('d-none')
                $("#mytel-invalid-msg").addClass('d-none')
                $("#mpt-invalid-msg").addClass('d-none')
                $("#telenor-invalid-msg").addClass('d-none')

                $("#telenor-valid-msg").addClass('d-none')
                $("#mpt-valid-msg").addClass('d-none')
                $("#ooredoo-valid-msg").addClass('d-none')
                $("#mytel-valid-msg").addClass('d-none')
                $("#mec-valid-msg").addClass('d-none')

                $("#mec-invalid-msg").removeClass('d-none')

            }
        })
        $("#phone-one").on("keyup",function () {
            let mobileNumberOne = document.getElementById("phone-one").value
            if (!mobileNumberOne === '' || mobileNumberOne.match(/^6[0-9]{8}$/)) {
                $("#dataPlan-mpt-invalid-msg").addClass('d-none')
                $("#dataPlan-ooredoo-invalid-msg").addClass('d-none')
                $("#dataPlan-mytel-invalid-msg").addClass('d-none')
                $("#dataPlan-mec-invalid-msg").addClass('d-none')
                $("#dataPlan-telenor-invalid-msg").addClass('d-none')

                $("#dataPlan-telenor-valid-msg").addClass('d-none')
                $("#dataPlan-mpt-valid-msg").addClass('d-none')
                $("#dataPlan-ooredoo-valid-msg").addClass('d-none')
                $("#dataPlan-mec-valid-msg").addClass('d-none')

                $("#submit-btn").removeClass('d-none')
                $("#dataPlan-mytel-valid-msg").removeClass('d-none')
            }else if(!mobileNumberOne === '' || mobileNumberOne.match(/^4[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#dataPlan-ooredoo-invalid-msg").addClass('d-none')
                $("#dataPlan-telenor-invalid-msg").addClass('d-none')
                $("#dataPlan-mytel-invalid-msg").addClass('d-none')
                $("#dataPlan-mec-invalid-msg").addClass('d-none')

                $("#dataPlan-telenor-valid-msg").addClass('d-none')
                $("#dataPlan-mpt-valid-msg").addClass('d-none')
                $("#dataPlan-ooredoo-valid-msg").addClass('d-none')
                $("#dataPlan-mytel-valid-msg").addClass('d-none')
                $("#dataPlan-mec-valid-msg").addClass('d-none')

                $("#dataPlan-mpt-invalid-msg").removeClass('d-none')

            }else if(!mobileNumberOne === '' || mobileNumberOne.match(/^7[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#dataPlan-ooredoo-invalid-msg").addClass('d-none')
                $("#dataPlan-mpt-invalid-msg").addClass('d-none')
                $("#dataPlan-mytel-invalid-msg").addClass('d-none')
                $("#dataPlan-mec-invalid-msg").addClass('d-none')

                $("#dataPlan-telenor-valid-msg").addClass('d-none')
                $("#dataPlan-mpt-valid-msg").addClass('d-none')
                $("#dataPlan-ooredoo-valid-msg").addClass('d-none')
                $("#dataPlan-mytel-valid-msg").addClass('d-none')
                $("#dataPlan-mec-valid-msg").addClass('d-none')

                $("#dataPlan-telenor-invalid-msg").removeClass('d-none')

            }else if(!mobileNumberOne === '' || mobileNumberOne.match(/^9[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#dataPlan-telenor-invalid-msg").addClass('d-none')
                $("#dataPlan-mpt-invalid-msg").addClass('d-none')
                $("#dataPlan-mytel-invalid-msg").addClass('d-none')
                $("#dataPlan-mec-invalid-msg").addClass('d-none')

                $("#dataPlan-telenor-valid-msg").addClass('d-none')
                $("#dataPlan-mpt-valid-msg").addClass('d-none')
                $("#dataPlan-ooredoo-valid-msg").addClass('d-none')
                $("#dataPlan-mytel-valid-msg").addClass('d-none')
                $("#dataPlan-mec-valid-msg").addClass('d-none')

                $("#dataPlan-ooredoo-invalid-msg").removeClass('d-none')

            }else if(!mobileNumberOne === '' || mobileNumberOne.match(/^3[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#dataPlan-ooredoo-invalid-msg").addClass('d-none')
                $("#dataPlan-mytel-invalid-msg").addClass('d-none')
                $("#dataPlan-mpt-invalid-msg").addClass('d-none')
                $("#dataPlan-telenor-invalid-msg").addClass('d-none')

                $("#dataPlan-telenor-valid-msg").addClass('d-none')
                $("#dataPlan-mpt-valid-msg").addClass('d-none')
                $("#dataPlan-ooredoo-valid-msg").addClass('d-none')
                $("#dataPlan-mytel-valid-msg").addClass('d-none')
                $("#dataPlan-mec-valid-msg").addClass('d-none')

                $("#dataPlan-mec-invalid-msg").removeClass('d-none')

            }
        })
        $("#phone-two").on("keyup",function () {
            let mobileNumberTwo = document.getElementById("phone-two").value
            if (!mobileNumberTwo === '' || mobileNumberTwo.match(/^6[0-9]{8}$/)) {
                $("#specialOffer-mpt-invalid-msg").addClass('d-none')
                $("#specialOffer-ooredoo-invalid-msg").addClass('d-none')
                $("#specialOffer-mytel-invalid-msg").addClass('d-none')
                $("#specialOffer-mec-invalid-msg").addClass('d-none')
                $("#specialOffer-telenor-invalid-msg").addClass('d-none')

                $("#specialOffer-telenor-valid-msg").addClass('d-none')
                $("#specialOffer-mpt-valid-msg").addClass('d-none')
                $("#specialOffer-ooredoo-valid-msg").addClass('d-none')
                $("#specialOffer-mec-valid-msg").addClass('d-none')

                $("#submit-btn").removeClass('d-none')
                $("#specialOffer-mytel-valid-msg").removeClass('d-none')
            }else if(!mobileNumberTwo === '' || mobileNumberTwo.match(/^4[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#specialOffer-ooredoo-invalid-msg").addClass('d-none')
                $("#specialOffer-telenor-invalid-msg").addClass('d-none')
                $("#specialOffer-mytel-invalid-msg").addClass('d-none')
                $("#specialOffer-mec-invalid-msg").addClass('d-none')

                $("#specialOffer-telenor-valid-msg").addClass('d-none')
                $("#specialOffer-mpt-valid-msg").addClass('d-none')
                $("#specialOffer-ooredoo-valid-msg").addClass('d-none')
                $("#specialOffer-mytel-valid-msg").addClass('d-none')
                $("#specialOffer-mec-valid-msg").addClass('d-none')

                $("#submit-btn").removeClass('d-none')

                $("#specialOffer-mpt-invalid-msg").removeClass('d-none')

            }else if(!mobileNumberTwo === '' || mobileNumberTwo.match(/^7[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#specialOffer-ooredoo-invalid-msg").addClass('d-none')
                $("#specialOffer-mpt-invalid-msg").addClass('d-none')
                $("#specialOffer-mytel-invalid-msg").addClass('d-none')
                $("#specialOffer-mec-invalid-msg").addClass('d-none')

                $("#specialOffer-telenor-valid-msg").addClass('d-none')
                $("#specialOffer-mpt-valid-msg").addClass('d-none')
                $("#specialOffer-ooredoo-valid-msg").addClass('d-none')
                $("#specialOffer-mytel-valid-msg").addClass('d-none')
                $("#specialOffer-mec-valid-msg").addClass('d-none')

                $("#specialOffer-telenor-invalid-msg").removeClass('d-none')

            }else if(!mobileNumberTwo === '' || mobileNumberTwo.match(/^9[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#specialOffer-telenor-invalid-msg").addClass('d-none')
                $("#specialOffer-mpt-invalid-msg").addClass('d-none')
                $("#specialOffer-mytel-invalid-msg").addClass('d-none')
                $("#specialOffer-mec-invalid-msg").addClass('d-none')

                $("#specialOffer-telenor-valid-msg").addClass('d-none')
                $("#specialOffer-mpt-valid-msg").addClass('d-none')
                $("#specialOffer-ooredoo-valid-msg").addClass('d-none')
                $("#specialOffer-mytel-valid-msg").addClass('d-none')
                $("#specialOffer-mec-valid-msg").addClass('d-none')

                $("#specialOffer-ooredoo-invalid-msg").removeClass('d-none')

            }else if(!mobileNumberTwo === '' || mobileNumberTwo.match(/^3[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#specialOffer-ooredoo-invalid-msg").addClass('d-none')
                $("#specialOffer-mytel-invalid-msg").addClass('d-none')
                $("#specialOffer-mpt-invalid-msg").addClass('d-none')
                $("#specialOffer-telenor-invalid-msg").addClass('d-none')

                $("#specialOffer-telenor-valid-msg").addClass('d-none')
                $("#specialOffer-mpt-valid-msg").addClass('d-none')
                $("#specialOffer-ooredoo-valid-msg").addClass('d-none')
                $("#specialOffer-mytel-valid-msg").addClass('d-none')
                $("#specialOffer-mec-valid-msg").addClass('d-none')

                $("#specialOffer-mec-invalid-msg").removeClass('d-none')

            }
        })
    }

    // *** MEC TEL is Selected ***
    if (display_operatorName === "Mec Tel") {

        console.log("MEC TEL")
        $("#phone").val("")
        $("#phone-one").val("")
        $("#phone-two").val("")

        $("#mpt-valid-msg").addClass('d-none')
        $("#telenor-valid-msg").addClass('d-none')
        $("#ooredoo-valid-msg").addClass('d-none')
        $("#mytel-valid-msg").addClass('d-none')
        $("#mec-valid-msg").addClass('d-none')

        $("#mpt-invalid-msg").addClass('d-none')
        $("#telenor-invalid-msg").addClass('d-none')
        $("#ooredoo-invalid-msg").addClass('d-none')
        $("#mytel-invalid-msg").addClass('d-none')
        $("#mec-invalid-msg").addClass('d-none')

        $("#dataPlan-mpt-valid-msg").addClass('d-none')
        $("#dataPlan-telenor-valid-msg").addClass('d-none')
        $("#dataPlan-ooredoo-valid-msg").addClass('d-none')
        $("#dataPlan-mytel-valid-msg").addClass('d-none')
        $("#dataPlan-mec-valid-msg").addClass('d-none')

        $("#dataPlan-mpt-invalid-msg").addClass('d-none')
        $("#dataPlan-telenor-invalid-msg").addClass('d-none')
        $("#dataPlan-ooredoo-invalid-msg").addClass('d-none')
        $("#dataPlan-mytel-invalid-msg").addClass('d-none')
        $("#dataPlan-mec-invalid-msg").addClass('d-none')

        $("#specialOffermpt-valid-msg").addClass('d-none')
        $("#specialOffertelenor-valid-msg").addClass('d-none')
        $("#specialOfferooredoo-valid-msg").addClass('d-none')
        $("#specialOffermytel-valid-msg").addClass('d-none')
        $("#specialOffermec-valid-msg").addClass('d-none')

        $("#specialOffermpt-invalid-msg").addClass('d-none')
        $("#specialOffertelenor-invalid-msg").addClass('d-none')
        $("#specialOfferooredoo-invalid-msg").addClass('d-none')
        $("#specialOffermytel-invalid-msg").addClass('d-none')
        $("#specialOffermec-invalid-msg").addClass('d-none')

        $("#phone").on("keyup",function () {
            let mobileNumber = document.getElementById("phone").value
            if (!mobileNumber === '' || mobileNumber.match(/^3[0-9]{8}$/)) {
                $("#mpt-invalid-msg").addClass('d-none')
                $("#ooredoo-invalid-msg").addClass('d-none')
                $("#mytel-invalid-msg").addClass('d-none')
                $("#mec-invalid-msg").addClass('d-none')
                $("#telenor-invalid-msg").addClass('d-none')

                $("#telenor-valid-msg").addClass('d-none')
                $("#mpt-valid-msg").addClass('d-none')
                $("#ooredoo-valid-msg").addClass('d-none')
                $("#mytel-valid-msg").addClass('d-none')

                $("#submit-btn").removeClass('d-none')
                $("#mec-valid-msg").removeClass('d-none')
            }else if(!mobileNumber === '' || mobileNumber.match(/^4[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#ooredoo-invalid-msg").addClass('d-none')
                $("#telenor-invalid-msg").addClass('d-none')
                $("#mytel-invalid-msg").addClass('d-none')
                $("#mec-invalid-msg").addClass('d-none')

                $("#telenor-valid-msg").addClass('d-none')
                $("#mpt-valid-msg").addClass('d-none')
                $("#ooredoo-valid-msg").addClass('d-none')
                $("#mytel-valid-msg").addClass('d-none')
                $("#mec-valid-msg").addClass('d-none')

                $("#mpt-invalid-msg").removeClass('d-none')
            }else if(!mobileNumber === '' || mobileNumber.match(/^7[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#ooredoo-invalid-msg").addClass('d-none')
                $("#mpt-invalid-msg").addClass('d-none')
                $("#mytel-invalid-msg").addClass('d-none')
                $("#mec-invalid-msg").addClass('d-none')

                $("#telenor-valid-msg").addClass('d-none')
                $("#mpt-valid-msg").addClass('d-none')
                $("#ooredoo-valid-msg").addClass('d-none')
                $("#mytel-valid-msg").addClass('d-none')
                $("#mec-valid-msg").addClass('d-none')

                $("#telenor-invalid-msg").removeClass('d-none')

            }else if(!mobileNumber === '' || mobileNumber.match(/^9[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#telenor-invalid-msg").addClass('d-none')
                $("#mpt-invalid-msg").addClass('d-none')
                $("#mytel-invalid-msg").addClass('d-none')
                $("#mec-invalid-msg").addClass('d-none')

                $("#telenor-valid-msg").addClass('d-none')
                $("#mpt-valid-msg").addClass('d-none')
                $("#ooredoo-valid-msg").addClass('d-none')
                $("#mytel-valid-msg").addClass('d-none')
                $("#mec-valid-msg").addClass('d-none')

                $("#ooredoo-invalid-msg").removeClass('d-none')

            }else if(!mobileNumber === '' || mobileNumber.match(/^6[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#ooredoo-invalid-msg").addClass('d-none')
                $("#mec-invalid-msg").addClass('d-none')
                $("#mpt-invalid-msg").addClass('d-none')
                $("#telenor-invalid-msg").addClass('d-none')

                $("#telenor-valid-msg").addClass('d-none')
                $("#mpt-valid-msg").addClass('d-none')
                $("#ooredoo-valid-msg").addClass('d-none')
                $("#mytel-valid-msg").addClass('d-none')
                $("#mec-valid-msg").addClass('d-none')

                $("#mytel-invalid-msg").removeClass('d-none')
            }
        })
        $("#phone-one").on("keyup",function () {
            let mobileNumberOne = document.getElementById("phone-one").value
            if (!mobileNumberOne === '' || mobileNumberOne.match(/^3[0-9]{8}$/)) {
                $("#dataPlan-mpt-invalid-msg").addClass('d-none')
                $("#dataPlan-ooredoo-invalid-msg").addClass('d-none')
                $("#dataPlan-mytel-invalid-msg").addClass('d-none')
                $("#dataPlan-mec-invalid-msg").addClass('d-none')
                $("#dataPlan-telenor-invalid-msg").addClass('d-none')

                $("#dataPlan-telenor-valid-msg").addClass('d-none')
                $("#dataPlan-mpt-valid-msg").addClass('d-none')
                $("#dataPlan-ooredoo-valid-msg").addClass('d-none')
                $("#dataPlan-mytel-valid-msg").addClass('d-none')

                $("#submit-btn").removeClass('d-none')
                $("#dataPlan-mec-valid-msg").removeClass('d-none')
            }else if(!mobileNumberOne === '' || mobileNumberOne.match(/^4[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#dataPlan-ooredoo-invalid-msg").addClass('d-none')
                $("#dataPlan-telenor-invalid-msg").addClass('d-none')
                $("#dataPlan-mytel-invalid-msg").addClass('d-none')
                $("#dataPlan-mec-invalid-msg").addClass('d-none')

                $("#dataPlan-telenor-valid-msg").addClass('d-none')
                $("#dataPlan-mpt-valid-msg").addClass('d-none')
                $("#dataPlan-ooredoo-valid-msg").addClass('d-none')
                $("#dataPlan-mytel-valid-msg").addClass('d-none')
                $("#dataPlan-mec-valid-msg").addClass('d-none')

                $("#dataPlan-mpt-invalid-msg").removeClass('d-none')
            }else if(!mobileNumberOne === '' || mobileNumberOne.match(/^7[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#dataPlan-ooredoo-invalid-msg").addClass('d-none')
                $("#dataPlan-mpt-invalid-msg").addClass('d-none')
                $("#dataPlan-mytel-invalid-msg").addClass('d-none')
                $("#dataPlan-mec-invalid-msg").addClass('d-none')

                $("#dataPlan-telenor-valid-msg").addClass('d-none')
                $("#dataPlan-mpt-valid-msg").addClass('d-none')
                $("#dataPlan-mytel-valid-msg").addClass('d-none')
                $("#dataPlan-ooredoo-valid-msg").addClass('d-none')
                $("#dataPlan-mec-valid-msg").addClass('d-none')

                $("#dataPlan-telenor-invalid-msg").removeClass('d-none')

            }else if(!mobileNumberOne === '' || mobileNumberOne.match(/^9[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#dataPlan-telenor-invalid-msg").addClass('d-none')
                $("#dataPlan-mpt-invalid-msg").addClass('d-none')
                $("#dataPlan-mytel-invalid-msg").addClass('d-none')
                $("#dataPlan-mec-invalid-msg").addClass('d-none')

                $("#dataPlan-telenor-valid-msg").addClass('d-none')
                $("#dataPlan-mpt-valid-msg").addClass('d-none')
                $("#dataPlan-ooredoo-valid-msg").addClass('d-none')
                $("#dataPlan-mytel-valid-msg").addClass('d-none')
                $("#dataPlan-mec-valid-msg").addClass('d-none')

                $("#dataPlan-ooredoo-invalid-msg").removeClass('d-none')

            }else if(!mobileNumberOne === '' || mobileNumberOne.match(/^6[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#dataPlan-ooredoo-invalid-msg").addClass('d-none')
                $("#dataPlan-mec-invalid-msg").addClass('d-none')
                $("#dataPlan-mpt-invalid-msg").addClass('d-none')
                $("#dataPlan-telenor-invalid-msg").addClass('d-none')

                $("#dataPlan-telenor-valid-msg").addClass('d-none')
                $("#dataPlan-mpt-valid-msg").addClass('d-none')
                $("#dataPlan-ooredoo-valid-msg").addClass('d-none')
                $("#dataPlan-mytel-valid-msg").addClass('d-none')
                $("#dataPlan-mec-valid-msg").addClass('d-none')

                $("#dataPlan-mytel-invalid-msg").removeClass('d-none')
            }
        })
        $("#phone-two").on("keyup",function () {
            let mobileNumberTwo = document.getElementById("phone-two").value
            if (!mobileNumberTwo === '' || mobileNumberTwo.match(/^3[0-9]{8}$/)) {
                $("#specialOffer-mpt-invalid-msg").addClass('d-none')
                $("#specialOffer-ooredoo-invalid-msg").addClass('d-none')
                $("#specialOffer-mytel-invalid-msg").addClass('d-none')
                $("#specialOffer-mec-invalid-msg").addClass('d-none')
                $("#specialOffer-telenor-invalid-msg").addClass('d-none')

                $("#specialOffer-telenor-valid-msg").addClass('d-none')
                $("#specialOffer-mpt-valid-msg").addClass('d-none')
                $("#specialOffer-ooredoo-valid-msg").addClass('d-none')
                $("#specialOffer-mytel-valid-msg").addClass('d-none')

                $("#submit-btn").removeClass('d-none')
                $("#specialOffer-mec-valid-msg").removeClass('d-none')
            }else if(!mobileNumberTwo === '' || mobileNumberTwo.match(/^4[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#specialOffer-ooredoo-invalid-msg").addClass('d-none')
                $("#specialOffer-telenor-invalid-msg").addClass('d-none')
                $("#specialOffer-mytel-invalid-msg").addClass('d-none')
                $("#specialOffer-mec-invalid-msg").addClass('d-none')

                $("#specialOffer-telenor-valid-msg").addClass('d-none')
                $("#specialOffer-mpt-valid-msg").addClass('d-none')
                $("#specialOffer-ooredoo-valid-msg").addClass('d-none')
                $("#specialOffer-mytel-valid-msg").addClass('d-none')
                $("#specialOffer-mec-valid-msg").addClass('d-none')

                $("#specialOffer-mpt-invalid-msg").removeClass('d-none')
            }else if(!mobileNumberTwo === '' || mobileNumberTwo.match(/^7[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#specialOffer-ooredoo-invalid-msg").addClass('d-none')
                $("#specialOffer-mpt-invalid-msg").addClass('d-none')
                $("#specialOffer-mytel-invalid-msg").addClass('d-none')
                $("#specialOffer-mec-invalid-msg").addClass('d-none')

                $("#specialOffer-telenor-valid-msg").addClass('d-none')
                $("#specialOffer-mpt-valid-msg").addClass('d-none')
                $("#specialOffer-ooredoo-valid-msg").addClass('d-none')
                $("#specialOffer-mytel-valid-msg").addClass('d-none')
                $("#specialOffer-mec-valid-msg").addClass('d-none')

                $("#specialOffer-telenor-invalid-msg").removeClass('d-none')

            }else if(!mobileNumberTwo === '' || mobileNumberTwo.match(/^9[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#specialOffer-telenor-invalid-msg").addClass('d-none')
                $("#specialOffer-mpt-invalid-msg").addClass('d-none')
                $("#specialOffer-mytel-invalid-msg").addClass('d-none')
                $("#specialOffer-mec-invalid-msg").addClass('d-none')

                $("#specialOffer-telenor-valid-msg").addClass('d-none')
                $("#specialOffer-mpt-valid-msg").addClass('d-none')
                $("#specialOffer-ooredoo-valid-msg").addClass('d-none')
                $("#specialOffer-mytel-valid-msg").addClass('d-none')
                $("#specialOffer-mec-valid-msg").addClass('d-none')

                $("#specialOffer-ooredoo-invalid-msg").removeClass('d-none')

            }else if(!mobileNumberTwo === '' || mobileNumberTwo.match(/^6[0-9]{8}$/)) {
                $("#submit-btn").addClass('d-none')

                $("#specialOffer-ooredoo-invalid-msg").addClass('d-none')
                $("#specialOffer-mec-invalid-msg").addClass('d-none')
                $("#specialOffer-mpt-invalid-msg").addClass('d-none')
                $("#specialOffer-telenor-invalid-msg").addClass('d-none')

                $("#specialOffer-telenor-valid-msg").addClass('d-none')
                $("#specialOffer-mpt-valid-msg").addClass('d-none')
                $("#specialOffer-ooredoo-valid-msg").addClass('d-none')
                $("#specialOffer-mytel-valid-msg").addClass('d-none')
                $("#specialOffer-mec-valid-msg").addClass('d-none')

                $("#specialOffer-mytel-invalid-msg").removeClass('d-none')
            }
        })
    }
}

// *** Output Value From Table ***
$(document).ready(function (){
    var topUpTableRow = $('#top-up-table tr')
    $(topUpTableRow).on('click',function (){
        var $row = jQuery(this).closest('tr');
        var $columns = $row.find('td');

        var values = "";

        jQuery.each($columns, function(i, item) {

            values = item.innerHTML;
            $("#topUp-amount").val(values)

            console.log(values);
        });
    })
})
$('#top-up-table .myRow ').on('click', function(){
    $('#top-up-table .myRow.row-highlight').removeClass('row-highlight');
    $(this).addClass('row-highlight');
});
$('#data-plan-table .myRow ').on('click', function(){
    $('#data-plan-table .myRow.row-highlight').removeClass('row-highlight');
    $(this).addClass('row-highlight');
});
$('#special-offer-table .myRow ').on('click', function(){
    $('#special-offer-table .myRow.row-highlight').removeClass('row-highlight');
    $(this).addClass('row-highlight');
});

// *** Enable stepper Multiselect ***
$("#operator-name").on('change',function (){
    console.log("Changed")
    $("#selectBox").removeClass('select-disable')
})

// -------------------

// *** 6.2 MULTIPLE TOP UP ***

function multipleTopUp(){

    var multipleServiceType = document.getElementById("multiple-service-type");
    var display_multipleTopUp=multipleServiceType.options[multipleServiceType.selectedIndex].text;
    // *** Data-Plan is Selected ***
    if (display_multipleTopUp === "Data Plan") {
        $("#specialoffer-submit-btn").addClass('d-none')
        $("#specialoffer-download-format").addClass('d-none')
        $("#specialoffer-upload").addClass('d-none')
        $("#topup-submit-btn").addClass('d-none')
        $("#topup-download-format").addClass('d-none')
        $("#topup-upload").addClass('d-none')

        $("#dataplan-download-format").removeClass('d-none')
        $("#dataplan-upload").removeClass('d-none')
        console.log("OKay")
    }

    // *** Special Offer is Selected ***
    if (display_multipleTopUp === "Special Offer") {
        $("#dataplan-submit-btn").addClass('d-none')
        $("#dataplan-download-format").addClass('d-none')
        $("#dataplan-upload").addClass('d-none')
        $("#topup-submit-btn").addClass('d-none')
        $("#topup-download-format").addClass('d-none')
        $("#topup-upload").addClass('d-none')

        $("#specialoffer-download-format").removeClass('d-none')
        $("#specialoffer-upload").removeClass('d-none')
        console.log("OKay")
    }

    // *** Top-Up is Selected ***
    if (display_multipleTopUp === "Top Up") {
        $("#dataplan-submit-btn").addClass('d-none')
        $("#dataplan-download-format").addClass('d-none')
        $("#dataplan-upload").addClass('d-none')
        $("#specialoffer-submit-btn").addClass('d-none')
        $("#specialoffer-download-format").addClass('d-none')
        $("#specialoffer-upload").addClass('d-none')

        $("#topup-download-format").removeClass('d-none')
        $("#topup-upload").removeClass('d-none')
    }
}

// *** SUBMIT BUTTON POP-UP ***
$(document).ready(function (){
    $("#dataplan-upload").change(function(){
        $("#dataplan-submit-btn").removeClass('d-none')
    });

    $("#specialoffer-upload").change(function(){
        $("#specialoffer-submit-btn").removeClass('d-none')
    });

    $("#topup-upload").change(function(){
        $("#topup-submit-btn").removeClass('d-none')
    });
})

// *** 6.3 BULK TOP UP ***

function bulkTopUp(){

    var bulkServiceType = document.getElementById("bulk-service-type");
    var display_bulkTopUp=bulkServiceType.options[bulkServiceType.selectedIndex].text;
    // *** Data-Plan is Selected ***
    if (display_bulkTopUp === "Data Plan") {
        $("#bulk-top-up-input").addClass('d-none')

        $("#bulk-specialoffer-download-format").addClass('d-none')
        $("#bulk-topup-download-format").addClass('d-none')

        $("#bulk-specialoffer-submit-btn").addClass('d-none')
        $("#bulk-topup-submit-btn").addClass('d-none')

        $("#bulk-specialoffer-upload").addClass('d-none')
        $("#bulkSpecialOffer-table").addClass('d-none')
        $("#bulk-topup-upload").addClass('d-none')
        $("#bulkTopUp-table").addClass('d-none')

        $("#bulk-dataplan-download-format").removeClass('d-none')
        $("#bulk-dataplan-upload").removeClass('d-none')
        $("#bulkDataPlan-table").removeClass('d-none')
        console.log("OKay")
    }

    // *** Special Offer is Selected ***
    if (display_bulkTopUp === "Special Offer") {
        $("#bulk-top-up-input").addClass('d-none')

        $("#bulk-dataplan-download-format").addClass('d-none')
        $("#bulk-topup-download-format").addClass('d-none')

        $("#bulk-dataplan-submit-btn").addClass('d-none')
        $("#bulk-topup-submit-btn").addClass('d-none')

        $("#bulk-dataplan-upload").addClass('d-none')
        $("#bulkDataPlan-table").addClass('d-none')
        $("#bulk-topup-upload").addClass('d-none')
        $("#bulkTopUp-table").addClass('d-none')

        $("#bulk-specialoffer-download-format").removeClass('d-none')
        $("#bulk-specialoffer-upload").removeClass('d-none')
        $("#bulkSpecialOffer-table").removeClass('d-none')
        console.log("OKay")
    }

    // *** Top-Up is Selected ***
    if (display_bulkTopUp === "Top Up") {
        $("#bulk-dataplan-download-format").addClass('d-none')
        $("#bulk-specialoffer-download-format").addClass('d-none')

        $("#bulk-dataplan-submit-btn").addClass('d-none')
        $("#bulk-specialoffer-submit-btn").addClass('d-none')

        $("#bulk-dataplan-upload").addClass('d-none')
        $("#bulkDataPlan-table").addClass('d-none')
        $("#bulk-specialoffer-upload").addClass('d-none')
        $("#bulkSpecialOffer-table").addClass('d-none')

        $("#bulk-top-up-input").removeClass('d-none')
        $("#bulk-topup-download-format").removeClass('d-none')
        $("#bulk-topup-upload").removeClass('d-none')
        $("#bulkTopUp-table").removeClass('d-none')
        console.log("OKay")
    }
}

$(document).ready(function (){
    $("#bulk-dataplan-file-upload").change(function(){
        $("#bulk-dataplan-submit-btn").removeClass('d-none')
    });

    $("#bulk-specialoffer-file-upload").change(function(){
        $("#bulk-specialoffer-submit-btn").removeClass('d-none')
    });

    $("#bulk-topup-file-upload").change(function(){
        $("#bulk-topup-submit-btn").removeClass('d-none')
    });
})

// *** Output Value From Table ***
$(document).ready(function (){
    var bulkTopUpTableRow = $('#bulkTopUp-table tr')
    $(bulkTopUpTableRow).on('click',function (){
        var $row = jQuery(this).closest('tr');
        var $columns = $row.find('td');

        var values = "";

        jQuery.each($columns, function(i, item) {

            values = item.innerHTML;
            $("#topUp-amount").val(values)

            console.log(values);
        });
    })
})

// *** Add Click-BG ***
$('#bulkDataPlan-table .myRow ').on('click', function(){
    $('#bulkDataPlan-table .myRow.row-highlight').removeClass('row-highlight');
    $(this).addClass('row-highlight');
});
$('#bulkSpecialOffer-table .myRow ').on('click', function(){
    $('#bulkSpecialOffer-table .myRow.row-highlight').removeClass('row-highlight');
    $(this).addClass('row-highlight');
});
$('#bulkTopUp-table .myRow ').on('click', function(){
    $('#bulkTopUp-table .myRow.row-highlight').removeClass('row-highlight');
    $(this).addClass('row-highlight');
});
