import React, { useEffect, useState } from "react";

export default function NasaPhoto() {
	const [photoData, setPhotoData] = useState(null);

	useEffect(() => {
		//runs api Photo
		fetchPhoto();

		async function fetchPhoto() {
			const res = await fetch(
				`https://api.nasa.gov/planetary/apod?api_key=caJxz01keFsaffiphz1UHqNMXXQ7rquM2A2xFENI `
			);
			//going to pull all the data
			const data = await res.json();
			//set photo data to whatever we pull out
			setPhotoData(data);
		}
	}, []);
	//in case photo does not show
	if (!photoData) return <div />;

	return (
		<div>
			<img src={photoData.url} alt={photoData.title} />
		</div>
	);
}
