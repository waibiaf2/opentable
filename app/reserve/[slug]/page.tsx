import Header from "@/app/reserve/[slug]/components/Header";
import Form from "@/app/reserve/[slug]/components/Form";

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
