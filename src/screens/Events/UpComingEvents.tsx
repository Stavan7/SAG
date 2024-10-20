import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { BASE_URL, api_routes } from '@config/api'
import { UpComing, Loader, NoUpComingEvents } from '@components/index'

const UpComingEvents = (): React.JSX.Element => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState<boolean>(true)

    const getData = async () => {
        try {
            const response = await fetch(`${BASE_URL}${api_routes.upcomingEvents}`, {
                method: "GET"
            })
            const result = await response.json()
            setData(result.data)
        }
        catch (error) {
            setLoading(false);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getData();
    }, [])

    if (loading) {
        return <Loader />
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent' }}>
            {data.length === 0 ? <NoUpComingEvents /> : <UpComing data={data} />}
        </SafeAreaView>
    )
}

export default UpComingEvents