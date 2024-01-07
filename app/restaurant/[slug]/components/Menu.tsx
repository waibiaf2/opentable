import MenuCard from "@/app/restaurant/[slug]/components/MenuCard";
import {Item} from ".prisma/client";

const Menu = ({menu}: { menu: Item[] }) => {
	return (
		<main className="bg-white mt-5">
			<div>
				<div className="mt-4 pb-1 mb-1">
					<h1 className="font-bold text-4xl">Menu</h1>
				</div>
				{
					menu.length ? (
						<div className="flex flex-wrap justify-between">
							{menu.map(menuItem => <MenuCard item={menuItem}/>)}
						</div>
					) : (
						<p className="bold">This restaurant doesnt have a menu</p>
					)
				}
			</div>
		</main>
	);
};

export default Menu;
