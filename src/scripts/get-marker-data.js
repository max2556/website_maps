import data from '../storage/markers.json';

class MarkerParser {
    get_markers() {
        return data;
    }
    get_marker_byId(id){
        for(let marker of data){
            if(marker.id === id) return marker
        }
    }
    get_marker_byNum(num){
        return data[num];
    }
}
export let markerParser = new MarkerParser();
