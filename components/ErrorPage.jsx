import React from 'react'
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
  
  
      if (error.status === 404) {
        return <div>This page doesn't exist!</div>;
      }
  
      if (error.status === 401) {
        return <div>You aren't authorized to see this</div>;
      }
  
      if (error.status === 503) {
        return <div>Looks like our API is down</div>;
      }
  
      if (error.status === 418) {
        return <div>🫖</div>;
      }
      console.log(error)
      return <div>Something went wrong ;

      </div>;
    }
  


export default ErrorPage
