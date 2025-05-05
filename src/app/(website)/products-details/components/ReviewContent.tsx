import CustomerSupport from "./CustomSupport"
import ReviewsHeader from "./ReviewsHeader"

const ReviewContent = () => {
    const handleSortChange = (sortOption: string) => {
        console.log(`Sorting by: ${sortOption}`)
    }

    return (
        <div>
            <ReviewsHeader onSortChange={handleSortChange} />
            <CustomerSupport />
            <CustomerSupport
                customerName="Jane Cooper"
                daysAgo={12}
                rating={4}
                reviewText="The documentation is comprehensive and the support team responds quickly. I had some issues with implementation but they were resolved promptly."
                companyResponse="Thank you for your feedback, Jane! We're glad we could help resolve your implementation issues. If you need any further assistance, please don't hesitate to reach out."
            />

            <CustomerSupport
                customerName="Robert Fox"
                daysAgo={15}
                rating={3}
                reviewText="Good product overall, but there are some bugs that need to be fixed. The UI components are well designed though."
                companyResponse="Hi Robert, we appreciate your honest feedback. We're actively working on fixing the bugs you've mentioned. We've added these issues to our priority list and should have them resolved in our next update."
            />
            <CustomerSupport
                customerName="Robert Fox"
                daysAgo={15}
                rating={3}
                reviewText="Good product overall, but there are some bugs that need to be fixed. The UI components are well designed though."
                companyResponse="Hi Robert, we appreciate your honest feedback. We're actively working on fixing the bugs you've mentioned. We've added these issues to our priority list and should have them resolved in our next update."
            />
            <CustomerSupport
                customerName="Robert Fox"
                daysAgo={15}
                rating={3}
                reviewText="Good product overall, but there are some bugs that need to be fixed. The UI components are well designed though."
                companyResponse="Hi Robert, we appreciate your honest feedback. We're actively working on fixing the bugs you've mentioned. We've added these issues to our priority list and should have them resolved in our next update."
            />
            <CustomerSupport
                customerName="Robert Fox"
                daysAgo={15}
                rating={3}
                reviewText="Good product overall, but there are some bugs that need to be fixed. The UI components are well designed though."
                companyResponse="Hi Robert, we appreciate your honest feedback. We're actively working on fixing the bugs you've mentioned. We've added these issues to our priority list and should have them resolved in our next update."
            />
            <CustomerSupport
                customerName="Robert Fox"
                daysAgo={15}
                rating={3}
                reviewText="Good product overall, but there are some bugs that need to be fixed. The UI components are well designed though."
                companyResponse="Hi Robert, we appreciate your honest feedback. We're actively working on fixing the bugs you've mentioned. We've added these issues to our priority list and should have them resolved in our next update."
            />
        </div>
    )
}

export default ReviewContent