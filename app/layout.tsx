import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import NavBar from "@/app/components/NavBar";
import React from "react";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
	title: {
		template: '%s | OpenTables',
		default: 'OpenTables',
	},
	description: 'A restaurant reservation system',
}




export default function RootLayout({
	   children,
   }: {
		children: React.ReactNode
}) {
	return (
		<html lang="en">
		<body className={inter.className}>
		<main className="bg-gray-100 min-h-screen w-screen">
			<main className="max-w-screen-2xl m-auto bg-white">
				<NavBar/>
				{children}
			</main>
		</main>
		</body>
		</html>
	)
}
