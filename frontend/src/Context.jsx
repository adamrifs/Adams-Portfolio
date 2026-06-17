import { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { serverUrl } from './urls'
// import { serverUrl } from './App'
export const AppContext = createContext()


export const AppProvider = ({ children }) => {

    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [projectCount, setProjectCount] = useState(0)
    const [isModal, setIsModal] = useState(false)

    
    useEffect(() => {
        fetchProjects()
    }, [])

    const fetchProjects = async () => {
        const startTime = Date.now();
        try {
            setLoading(true)
            const response = await axios.get(serverUrl + 'projects/getProject')
            console.log(response)
            setProjects(response.data.listProject)
            setProjectCount(response.data.listProject.length)
        } catch (error) {
            console.log(error)
        }
        finally {
            const elapsedTime = Date.now() - startTime;
            const remainingTime = 1000 - elapsedTime;
            if (remainingTime > 0) {
                await new Promise(resolve => setTimeout(resolve, remainingTime));
            }
            setLoading(false)
        }
    }
    const value = {
        projects, loading, projectCount, fetchProjects, isModal, setIsModal
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
