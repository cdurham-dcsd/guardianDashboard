import React from "react";

export const data = {
    /// ////////////////////////////////////////////////////////////
    /// /////////////////////// Global /////////////////////////////
    /// ////////////////////////////////////////////////////////////
    BreadCrumb_Transportation: "Transportation",

    /// ////////////////////////////////////////////////////////////
    /// ////////////////////// Headers /////////////////////////////
    /// ////////////////////////////////////////////////////////////
    trans_Info_header: "Transportation Information",
    trans_BusPass_header: "Bus Pass Application",
    trans_Pay_header: "Transportation Payment Selection",
    trans_ESig_header: "Electronic Signature of Parent/Legal Guardian",
    trans_Submit_header: "Submit Or Exit",

    /// ////////////////////////////////////////////////////////////
    /// //////////// Transportation Information ////////////////////
    /// ////////////////////////////////////////////////////////////
    trans_Info_s1: (
        <li>
            To verify your student&apos;s route information, go to:{" "}
            <a
                href="https://parent.smart-tag.net/%40dcsd"
                rel="noreferrer"
                target="_blank"
            >
                Douglas County - SMART tag&#8482; Parent Portal
            </a>
            .{" "}
        </li>
    ),
    trans_Info_s2:
        "Students who are open enrolled or who live within a non-transport zone are not eligible for transportation and will not be issued a bus pass.",
    trans_Info_s3: "Students must use their assigned bus route and bus stops.",
    trans_Info_s4:
        "Students are required to scan their SMART tag bus pass on and off the bus each time they ride.",
    trans_Info_s5: (
        <li>
            DO NOT PHYSICALLY ALTER BUS PASS. You can place the pass in a clear
            plastic sleeve attached to a lanyard if needed. If a card is damaged
            or lost, a replacement bus pass can be requested through{" "}
            <a
                href="https://www.k12insight.com/Lets-Talk/DialogueCustom.aspx?k=WK3Z6DLT@DG2T5DLT"
                rel="noreferrer"
                target="_blank"
            >
                Let&apos;s Talk
            </a>
            .
        </li>
    ),
    trans_Info_s6:
        "Only students that are eligible for transportation can ride the bus. We are unable to accommodate one day bus passes for students to ride home with other students on the bus.",
    trans_Info_s7:
        "Students who receive specialized transportation services do not need to request a SMART tag bus pass. Your student's card will be distributed to their bus driver directly.",
    trans_Info_s8:
        "Bus passes for general education students will be distributed to students by their bus driver after an application has been submitted. Students may ride in the interim while waiting for their bus pass.",
    trans_Info_s9: (
        <li>
            If you would like additional information on SMART tag or have any
            other transportation-related questions, please submit through{" "}
            <a
                href="https://www.k12insight.com/Lets-Talk/DialogueCustom.aspx?k=WK3Z6DLT@DG2T5DLT"
                rel="noreferrer"
                target="_blank"
            >
                Lets Talk
            </a>
            .
        </li>
    ),
    /// ////////////////////////////////////////////////////////////
    /// //////////// Bus Pass Application //////////////////////////
    /// ////////////////////////////////////////////////////////////
    trans_BusPass_s1:
        "On {LINK} you submitted an application for a SMART tag bus pass. The DCSD Transportation Department will review and process your application.",
    trans_BusPass_s2:
        "On {LINK} you submitted an application for a replacement SMART tag bus pass. The DCSD Transportation Department will review and process your application",
    trans_BusPass_s3: "You currently have a SMART tag card issued",
    trans_BusPass_s4: "You do not currently have a SMART tag card issued",
    trans_BusPass_s5: (
        <>
            checking__ Our system indicates you have already been issued a bus
            pass. Please contact the DCSD Transportation team at{" "}
            <a
                href="https://www.k12insight.com/Lets-Talk/DialogueCustom.aspx?k=WK3Z6DLT@DG2T5DLT"
                rel="noreferrer"
                target="_blank"
            >
                Let&apos;s Talk
            </a>
            to request a replacement SMART tag bus pass.
        </>
    ),
    trans_BusPass_s6:
        "you indicated that this student would not be riding a bus this year. If you need to update your selection for the student, please contact the LINK.",
    trans_BusPass_s7:
        "Based on current school enrollment and your home address, your student is eligible for transportation services. In order to assign your student to a route, please answer the following question:",
    trans_BusPass_s8: "Will your student be riding the bus this year?",
    trans_BusPass_s9: "Yes, my student will ride the bus this year",
    trans_BusPass_s10: "No, my student will not ride the bus this year",
    trans_BusPass_s11:
        "Thank you for your response. By submitting this form, your student’s application for a SMART take bus pass will be sent to DCSD's Transportation Department for processing. Please register for an account in the Douglas County - SMART tag&#8482; Parent Portal (http://parent.smart-tag.net/) to sign up for Smart Alert text or email notifications for ridership confirmation.",
    trans_BusPass_s12: (
        <div>
            Thank you for your response. By submitting this form, your student
            will NOT be issued a SMART tag bus pass. If you need to change your
            selection at a later date, please contact the{" "}
            <a
                href="https://www.k12insight.com/Lets-Talk/DialogueCustom.aspx?k=WK3Z6DLT@DG2T5DLT"
                rel="noreferrer"
                target="_blank"
            >
                Transportation Department
            </a>
            .
        </div>
    ),

    /// ////////////////////////////////////////////////////////////
    /// //////////// Transportation Payment Selection //////////////
    /// ////////////////////////////////////////////////////////////
    trans_Pay_s1:
        "Transportation fees are approved by the DCSD Board of Education. Rides are $1 each way per student. Students who receive specialized transportation services or qualify for the free or reduced lunch program will have their fees waived.",
    trans_Pay_s2: "There are two options to pay your fees:",
    trans_Pay_s3:
        "Annual Prepayment of $250. (Applies to each eligible student)",
    trans_Pay_s4:
        "This option provides approximately 28% discount based on full time bus ridership.",
    trans_Pay_s5:
        "This option - if not paid by THING - will revert to Quarterly Billing.",
    trans_Pay_s6: "Quarterly Billing",
    trans_Pay_s7:
        "Accumulated ride charges of $1 each way will be invoiced via MySchoolBucks.",
    trans_Pay_s8: (
        <div>
            If you would like to change your transportation payment election,
            please visit{" "}
            <a
                href="https://www.myschoolbucks.com/ver2/prdembd?ref=ZZHVZS5TX305OUU_ZZ5UJEZ2IPOUCEP"
                rel="noreferrer"
                target="_blank"
            >
                My School Bucks
            </a>
            .
        </div>
    ),
    /// ////////////////////////////////////////////////////////////
    /// ////// Electronic Signature of Parent/Legal Guardian ///////
    /// ////////////////////////////////////////////////////////////
    trans_ElecSig_s1:
        "By entering my name below, I understand that I am providing an electronic signature which will serve as authorization and verification of the accuracy and completeness of the information I have provided for my student.",
    trans_ElecSig_s2:
        "I understand that outstanding transportation fees may be sent to a collection agency for non-payment and/or may initiate further legal action.",
    trans_ElecSig_s3: (
        <div className="mb-2">
            My signature indicates that I have read and understand all the above
            terms of the application for a bus pass and have reviewed the
            district policies and procedures in regards to transportation in the{" "}
            <a
                href="https://www.dcsdk12.org/schools_academics/academics/code_of_conduct"
                rel="noreferrer"
                target="_blank"
            >
                Student Code of Conduct document
            </a>
            .
        </div>
    ),
    trans_ElecSig_s4: "First Name",
    trans_ElecSig_s5: "Middle Name",
    trans_ElecSig_s6: "Last Name",
    trans_ElecSig_s7:
        "By checking this box, I certify that I am the parent or legal guardian",

    /// ////////////////////////////////////////////////////////////
    /// //////////////////// Buttons//////////////////////// ///////
    /// ////////////////////////////////////////////////////////////
    SubmitButton: "Submit",
    ExitButton: "Exit",
    Main_Header_Welcome: "Welcome",
    Main_Header_HelpfulLinks: "Helpful Links",
    // Main_Header_GDashboard: "Guardian Dashboard",
    Main_Header_Exit: "EXIT",
    Main_Header_Logout: "LOGOUT",
    Main_Header_s1: "Contact My Student(s) Nurse",
    Main_Header_s2: "Academic Calendars",
    Main_Header_s3: "Parent Resources",
    Main_Header_s4: "Bus Routes",
    Main_Header_s5: "Online Payments",
    Main_Header_s6: "Lunch Menus"
};
