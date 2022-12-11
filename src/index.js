import { default as brands } from './brands'
import { default as wrestlers } from './wrestlers'
import { default as shows } from './shows'
import { default as factions } from './factions'
import { default as championships } from './championships'
import { default as reigns } from './reigns'

function getCollectionByBrand(brandId) {
    const filteredChampionships = championships.filter(item => item?.brandIds?.includes(brandId))
    const championshipIds = filteredChampionships.map(item => item.id)
    const filteredReigns = reigns.filter(item => championshipIds.includes(item.championshipId))

    return {
        brands: brands.filter(item => item.id === brandId),
        championships: filteredChampionships,
        factions: factions.filter(item => item?.brandIds?.includes(brandId)),
        reigns: filteredReigns,
        shows: shows.filter(item => item?.brandIds?.includes(brandId)),
        wrestlers: wrestlers.filter(item => item?.brandIds?.includes(brandId))
    }
}

export { brands, factions, championships, reigns, wrestlers, shows, getCollectionByBrand }
