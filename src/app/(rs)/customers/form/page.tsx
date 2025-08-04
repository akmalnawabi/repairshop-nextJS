import { getCustomer } from "@/lib/queries/getCustomer";
import { BackButton } from "@/components/ui/backButton";

export default async function CustomerFormPage({ searchParams }:
    { searchParams: Promise<{ [key: string]: string | undefined }> }
) {
    try {
        const { customerId } = await searchParams;
        if (customerId) {
            const customer = await getCustomer(parseInt(customerId));

            if (!customer) {
                return (
                    <>
                        <h2>customer id {customerId} not found</h2>
                        <BackButton title="Back to customers" variant="default" />
                    </>
                )
            }
        } else {
            // new customer form 

        }

    } catch (e) {
        if (e instanceof Error) {
            throw e
        }
    }
}
