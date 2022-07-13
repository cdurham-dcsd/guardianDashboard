import React from "react";
import T from "../../translations/Translations";

const TransportationInformation = () => {
    return (
        <div>
            <ul>
                {/*<li>*/}
                {/*    To verify your student&apos;s route information, go to:{" "}*/}
                {/*    <a*/}
                {/*        href="https://parent.smart-tag.net/%40dcsd"*/}
                {/*        rel="noreferrer"*/}
                {/*        target="_blank"*/}
                {/*    >*/}
                {/*        Douglas County - SMART tag&#8482; Parent Portal*/}
                {/*    </a>*/}
                {/*    .{" "}*/}
                {/*</li>*/}
                {T({ key: "trans_Info_s1" })}
                <li>
                    {/*Students who are open enrolled or who live within a*/}
                    {/*non-transport zone are not eligible for transportation and*/}
                    {/*will not be issued a bus pass.*/}
                    {T({ key: "trans_Info_s2" })}
                </li>
                <li>
                    {/*Students must use their assigned bus route and bus stops.*/}
                    {T({ key: "trans_Info_s3" })}
                </li>
                <li>
                    {/*Students are required to scan their SMART tag bus pass on*/}
                    {/*and off the bus each time they ride.*/}
                    {T({ key: "trans_Info_s4" })}
                </li>
                {/*<li>*/}
                {/*    DO NOT PHYSICALLY ALTER BUS PASS. You can place the pass in*/}
                {/*    a clear plastic sleeve attached to a lanyard if needed. If a*/}
                {/*    card is damaged or lost, a replacement bus pass can be*/}
                {/*    requested through{" "}*/}
                {/*    <a*/}
                {/*        href="https://www.k12insight.com/Lets-Talk/DialogueCustom.aspx?k=WK3Z6DLT@DG2T5DLT"*/}
                {/*        rel="noreferrer"*/}
                {/*        target="_blank"*/}
                {/*    >*/}
                {/*        Let&apos;s Talk*/}
                {/*    </a>*/}
                {/*    .*/}
                {/*</li>*/}
                {T({ key: "trans_Info_s5" })}
                <li>
                    {/*Only students that are eligible for transportation can ride*/}
                    {/*the bus. We are unable to accommodate one day bus passes for*/}
                    {/*students to ride home with other students on the bus.*/}
                    {T({ key: "trans_Info_s6" })}
                </li>
                <li>
                    {/*Students who receive specialized transportation services do*/}
                    {/*not need to request a SMART tag bus pass. Your*/}
                    {/*student&apos;s card will be distributed to their bus driver*/}
                    {/*directly.*/}
                    {T({ key: "trans_Info_s7" })}
                </li>
                <li>
                    {/*Bus passes for general education students will be*/}
                    {/*distributed to students by their bus driver after an*/}
                    {/*application has been submitted. Students may ride in the*/}
                    {/*interim while waiting for their bus pass.*/}
                    {T({ key: "trans_Info_s8" })}
                </li>
                {/*<li>*/}
                {/*    If you would like additional information on SMART tag or*/}
                {/*    have any other transportation-related questions, please*/}
                {/*    submit through{" "}*/}
                {/*    <a*/}
                {/*        href="https://www.k12insight.com/Lets-Talk/DialogueCustom.aspx?k=WK3Z6DLT@DG2T5DLT"*/}
                {/*        rel="noreferrer"*/}
                {/*        target="_blank"*/}
                {/*    >*/}
                {/*        Let&apos;s Talk*/}
                {/*    </a>*/}
                {/*    .*/}
                {/*</li>*/}
                {T({ key: "trans_Info_s9" })}
            </ul>
        </div>
    );
};

export default TransportationInformation;
