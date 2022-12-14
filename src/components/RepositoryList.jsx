import { RepositoryItem } from './RepositoryItem';
import '../styles/repositories.scss';
import { useState, useEffect } from 'react';

export function RepositoryList() {
	const { repositories, setRepositories } = useState([]);

	useEffect(() => {
		fetch('https://api.github.com/orgs/rocketseat/repos')
			.then((response) => response.json())
			.then((data) => setRepositories(data));
	}, []);

	console.log(repositories);

	return (
		<section className='repository-list'>
			<h1>Repository List</h1>

			<ul>
				{repositories.map((repository) => {
					console.log(repository);
					// return <RepositoryItem repository={repository} />;
				})}
			</ul>
		</section>
	);
}
