import React, { useEffect, useState } from "react";

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto() {
	const [photoData, setPhotoData] = useState(null);

	useEffect(() => {
		//runs api Photo
		fetchPhoto();

		async function fetchPhoto() {
			const res = await fetch(
				`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
			);
			//going to pull all the data
			const data = await res.json();
			//set photo data to whatever we pull out
			setPhotoData(data);
			console.log(data);
		}
	}, []);
	//in case photo does not show
	if (!photoData) return <div />;

	return (
		<div>
			{/* ternary for if either a image or a video  */}
			{photoData.media_type === "image" ? (
				<img src={photoData.url} alt={photoData.title} />
			) : (
				// iframe imbeds html element inside another html, in this case a video
				<iframe
					title="space-video"
					src={photoData.url}
					gesture="media"
					allow="encrypted-media"
					allowFullScreen
					className="photo"
				/>
			)}
			<div>
				<h1>{photoData.title}</h1>
				<p>{photoData.date}</p>
				<p>{photoData.explanation}</p>
			</div>
		</div>
	);
}
