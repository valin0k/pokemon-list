import React from 'react'

export default function ({item, filterLabel, handleLabelRemove, handleLabelSelect}) {
  return (
    <tr>
      <td><img alt="pokemon" src={item.sprites.front_default} /></td>
      <td>{item.name}</td>
      <td>
        {item.types.map((itemType) => (
          <div
            key={itemType.type.name}
            className={filterLabel === itemType.type.name
              ? 'ui green label pokemon-type active'
              : 'ui green label pokemon-type'
            }
            onClick={() => filterLabel === itemType.type.name
              ?	handleLabelRemove(itemType.type.name)
              : handleLabelSelect(itemType.type.name)
            }
          >
            {itemType.type.name}
          </div>
        ))}
      </td>
      <td>
        {item.abilities.map((itemAbility) => (
          <div
            key={itemAbility.ability.name}
            className="ui grey label pokemon-ability"
          >
            {itemAbility.ability.name}
          </div>
        ))}
      </td>
    </tr>
  )
}
