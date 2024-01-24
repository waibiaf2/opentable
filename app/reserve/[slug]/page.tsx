import Header from "@/app/reserve/[slug]/components/Header";
import Form from "@/app/reserve/[slug]/components/Form";
import {Metadata} from "next";

export const metadata: Metadata = {
	title: "Reserve at Millstone Grill(Toronto)",
}

const Reserve = () => {
	return (
		<>
			<div className="border-t h-screen">
				<div className="py-9 w-3/5 m-auto">
					<Header/>
					<Form/>
				</div>
			</div>
		</>
	);
};

export default Reserve;
