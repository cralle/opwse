import React, { useState, useEffect } from "react"
import { RouteComponentProps } from "@reach/router"
import styles from "./Person.module.scss"

type AnyPerson = {
  gender: "male"
  name: {
    title: "Mr"
    first: "Chad"
    last: "Hansen"
  }
  location: {
    street: {
      number: 6923
      name: "W Pecan St"
    }
    city: "Sydney"
    state: "South Australia"
    country: "Australia"
    postcode: 2384
    coordinates: {
      latitude: "-81.6382"
      longitude: "-5.7164"
    }
    timezone: {
      offset: "+2:00"
      description: "Kaliningrad, South Africa"
    }
  }
  email: "chad.hansen@example.com"
  login: {
    uuid: "258bec9a-ef48-4f3f-a232-48e2ecd77791"
    username: "browncat355"
    password: "broker"
    salt: "68sF9m8N"
    md5: "a53af1a66dd4ccc71f72117fa6066244"
    sha1: "649f0f08a20de27f695bc1e27d9b680a761764d8"
    sha256: "57b4a4b6341a80a4f12300dc7d9615d104d66e7deea1a164df86c8d25f540781"
  }
  dob: {
    date: "1972-08-06T11:45:58.564Z"
    age: 48
  }
  registered: {
    date: "2018-03-16T14:36:08.233Z"
    age: 2
  }
  phone: "08-7844-4601"
  cell: "0412-734-021"
  id: {
    name: "TFN"
    value: "311635140"
  }
  picture: {
    large: "https://randomuser.me/api/portraits/men/13.jpg"
    medium: "https://randomuser.me/api/portraits/med/men/13.jpg"
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/13.jpg"
  }
  nat: "AU"
}

type Props = RouteComponentProps<{
  results: string
}>

export const Person: React.FC<Props> = ({ results = 1 }) => {
  const [persons, setPersons] = useState([] as Array<AnyPerson>)

  useEffect(() => {
    fetch(`https://randomuser.me/api?results=${results}`)
      .then(x => x.json())
      .then(x => setPersons(x.results as Array<AnyPerson>))
  }, [results])

  return (
    <>
      {persons.map((person, i) => (
        <RenderPerson key={i} person={person} />
      ))}
      <div className={styles.person}>
        <pre>{JSON.stringify(persons, null, 2)}</pre>
      </div>
    </>
  )
}

const RenderPerson: React.FC<{ person: AnyPerson }> = ({ person }) => {
  return (
    <div className={styles.person}>
      <img className={styles.personPicture} src={person.picture.thumbnail} />
      {person.gender}
    </div>
  )
}
