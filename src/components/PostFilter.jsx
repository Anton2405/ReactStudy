import React from 'react'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/mySelect'

export default function PostFilter({ filter, setFilter }) {
    return (
        <div>

            <MyInput
                value={filter.query}
                onChange={e => setFilter({ ...filter, query: e.target.value })}
                placeholder='Поиск...'
            />

            <MySelect
                defaultValue="Сортировка по"
                options={[
                    { value: 'title', name: 'По названию' },
                    { value: 'body', name: 'По описанию' },
                ]}
                value={filter.sort}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
            />


        </div>
    )
}
