export default function CancellationContent() {
    return (
        <div className="space-y-4 lg:space-y-10 lg:p-4 w-full">
            <div>
                <h1 className="text-2xl lg:text-4xl text-[#081E2A] font-bold">1. Cancellation And Changes</h1>
                <h4 className="font-bold text-[21px] mt-2 lg:mt-8">Description:</h4>
                <p className="mt-3 lg:mt-5 text-[#6B7280] text-base leading-relaxed">
                    {`a) Occasionally it may be deemed necessary to make changes to your holiday and the Company reserves
the right to do so at any time, and you will be notified of any changes at the earliest possible opportunity.
If a major change to your tour is necessary, providing it does not arise from circumstances beyond the
Company’s control, you may choose (i) to accept the change of arrangements (ii) to purchase another
holiday from us or (iii) to cancel your holiday. Compensation may be payable in cases of major change as
detailed below.`}
                </p>
                <p className="lg:mt-6 lg:mb-8 text-[#6B7280] text-base">
                    {`b) No compensation will be payable for minor changes. Minor changes include minimal changes to departure
and arrival times, changes to the type of aircraft used and restaurant and accommodation changes to a
comparable or superior standard.`}
                </p>
                <p className="text-[#444a56] text-base">
                    {`a) Compensation will not be paid for changes or cancellations caused by Acts of God (Force Majeure), war,
threat of war, riot, civil strike, industrial dispute, terrorist activity, natural or man-made disaster, fire, technical
problems to transport, closure or congestion of airports, strikes or other industrial action, adverse weather
conditions or any other event beyond the Company’s control. It is essential that you take out adequate
travel insurance.`}
                </p>
            </div>

            <div>
                <h1 className="text-2xl lg:text-4xl text-[#081E2A] font-bold">1. Cancellation By You</h1>
                <h4 className="font-bold text-[21px]  mt-2 lg:mt-8">Description:</h4>
                <p className="mt-3 lg:mt-5 mb-4 text-[#6B7280] text-base leading-relaxed">
                    {`a) Occasionally it may be deemed necessary to make changes to your holiday and the Company reserves
the right to do so at any time, and you will be notified of any changes at the earliest possible opportunity.
If a major change to your tour is necessary, providing it does not arise from circumstances beyond the
Company’s control, you may choose (i) to accept the change of arrangements (ii) to purchase another
holiday from us or (iii) to cancel your holiday. Compensation may be payable in cases of major change as
detailed below.`}
                </p>
                <ul className="list-disc ml-6 text-lg font-bold text-black space-y-3 lg:space-y-8">
                    <li>30 Days or More 50% Of Deposit</li>
                    <li>{`15 – 30 Days 100% Of Deposit`}</li>
                    <li>{`8 – 15 Days 80% Of Tour Cost`}</li>
                    <li>{`1 – 7 Days 100% Of Tour Cost`}</li>
                </ul>
                <p className="mt-[18px] text-[#6B7280] text-base">
                    {`b) No compensation will be payable for minor changes. Minor changes include minimal changes to departure
and arrival times, changes to the type of aircraft used and restaurant and accommodation changes to a
comparable or superior standard.`}
                </p>
            </div>
        </div>
    );
}
