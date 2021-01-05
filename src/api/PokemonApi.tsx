import { ApolloClient, InMemoryCache, NormalizedCacheObject, gql } from '@apollo/client';
import { PokemonInterface } from '../interfaces/Pokemon';
import { PokemonListInterface } from '../interfaces/PokemonList';

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
	uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
	cache: new InMemoryCache()
});

export const getPokemonList = (offset: number) => {
	const GET_POKEMON_LIST_QUERY = gql`
		query pokemons($limit: Int, $offset: Int) {
			pokemons(limit: $limit, offset: $offset) {
				count
				next
				previous
				nextOffset
				prevOffset
				results {
					id
					url
					name
					image
				}
			}
		}
	`;

	return client.query<{pokemons: PokemonListInterface}>({
		query: GET_POKEMON_LIST_QUERY,
		variables: {
			limit: 20,
			offset: offset
		}
	});
}

export const getPokemonDetail = (pokemonName: string) => {
	const GET_POKEMON_LIST_QUERY = gql`
	query pokemon($name: String!) {
		pokemon(name: $name) {
		  id
		  name
		  sprites {
			front_default
		  }
		  moves {
			move {
			  name
			}
		  }
		  types {
			type {
			  name
			}
		  }
		  abilities {
			ability {
			  name
			}
		  }
		  base_experience
		  forms {
			name
		  }
		  height
		  held_items {
			item {
			  name
			}
			version_details {
			  rarity
			  version {
				name
			  }
			}
		  }
		  stats {
			base_stat
			effort
			stat {
			  name
			}
		  }
		  weight
		  message
		}
	  }
	`;

	return client.query<{pokemon: PokemonInterface}>({
		query: GET_POKEMON_LIST_QUERY,
		variables: {
			name: pokemonName
		}
	});
}