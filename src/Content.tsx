import { fetch } from './api'
import { useQuery } from 'react-query';

export const Content = () => {
  const { isLoading, error, data } = useQuery('repoData', async () =>{
    return await fetch();
  })
  const unstableMessage = () => {
   if (isLoading) return 'Loading...'
   if (error) return 'An error has occurred: ' + JSON.stringify(error)
  }
    return(
        <p>
          {unstableMessage() && JSON.stringify(data)}
        </p>
    )
}