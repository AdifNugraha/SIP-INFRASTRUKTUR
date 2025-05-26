var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_KabupatenKudus_1 = new ol.format.GeoJSON();
var features_KabupatenKudus_1 = format_KabupatenKudus_1.readFeatures(json_KabupatenKudus_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KabupatenKudus_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KabupatenKudus_1.addFeatures(features_KabupatenKudus_1);
var lyr_KabupatenKudus_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KabupatenKudus_1, 
                style: style_KabupatenKudus_1,
                popuplayertitle: 'Kabupaten Kudus',
                interactive: true,
                title: '<img src="styles/legend/KabupatenKudus_1.png" /> Kabupaten Kudus'
            });
var format_BatasKabupaten_2 = new ol.format.GeoJSON();
var features_BatasKabupaten_2 = format_BatasKabupaten_2.readFeatures(json_BatasKabupaten_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKabupaten_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKabupaten_2.addFeatures(features_BatasKabupaten_2);
var lyr_BatasKabupaten_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKabupaten_2, 
                style: style_BatasKabupaten_2,
                popuplayertitle: 'Batas Kabupaten',
                interactive: true,
                title: '<img src="styles/legend/BatasKabupaten_2.png" /> Batas Kabupaten'
            });
var format_BatasKecamatan_3 = new ol.format.GeoJSON();
var features_BatasKecamatan_3 = format_BatasKecamatan_3.readFeatures(json_BatasKecamatan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKecamatan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatan_3.addFeatures(features_BatasKecamatan_3);
var lyr_BatasKecamatan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKecamatan_3, 
                style: style_BatasKecamatan_3,
                popuplayertitle: 'Batas Kecamatan',
                interactive: true,
                title: '<img src="styles/legend/BatasKecamatan_3.png" /> Batas Kecamatan'
            });
var format_TitikAirBersih_4 = new ol.format.GeoJSON();
var features_TitikAirBersih_4 = format_TitikAirBersih_4.readFeatures(json_TitikAirBersih_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikAirBersih_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikAirBersih_4.addFeatures(features_TitikAirBersih_4);
var lyr_TitikAirBersih_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikAirBersih_4, 
                style: style_TitikAirBersih_4,
                popuplayertitle: 'Titik Air Bersih',
                interactive: true,
                title: '<img src="styles/legend/TitikAirBersih_4.png" /> Titik Air Bersih'
            });
var format_TitikPasar_5 = new ol.format.GeoJSON();
var features_TitikPasar_5 = format_TitikPasar_5.readFeatures(json_TitikPasar_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikPasar_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikPasar_5.addFeatures(features_TitikPasar_5);
var lyr_TitikPasar_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikPasar_5, 
                style: style_TitikPasar_5,
                popuplayertitle: 'Titik Pasar',
                interactive: true,
                title: '<img src="styles/legend/TitikPasar_5.png" /> Titik Pasar'
            });
var format_TitikPersampahan_6 = new ol.format.GeoJSON();
var features_TitikPersampahan_6 = format_TitikPersampahan_6.readFeatures(json_TitikPersampahan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikPersampahan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikPersampahan_6.addFeatures(features_TitikPersampahan_6);
var lyr_TitikPersampahan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikPersampahan_6, 
                style: style_TitikPersampahan_6,
                popuplayertitle: 'Titik Persampahan',
                interactive: true,
                title: '<img src="styles/legend/TitikPersampahan_6.png" /> Titik Persampahan'
            });
var format_TitikHalte_7 = new ol.format.GeoJSON();
var features_TitikHalte_7 = format_TitikHalte_7.readFeatures(json_TitikHalte_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikHalte_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikHalte_7.addFeatures(features_TitikHalte_7);
var lyr_TitikHalte_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikHalte_7, 
                style: style_TitikHalte_7,
                popuplayertitle: 'Titik Halte',
                interactive: true,
                title: '<img src="styles/legend/TitikHalte_7.png" /> Titik Halte'
            });
var format_TitikTerminal_8 = new ol.format.GeoJSON();
var features_TitikTerminal_8 = format_TitikTerminal_8.readFeatures(json_TitikTerminal_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikTerminal_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikTerminal_8.addFeatures(features_TitikTerminal_8);
var lyr_TitikTerminal_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikTerminal_8, 
                style: style_TitikTerminal_8,
                popuplayertitle: 'Titik Terminal',
                interactive: true,
                title: '<img src="styles/legend/TitikTerminal_8.png" /> Titik Terminal'
            });
var format_JaringanJalanKudus_9 = new ol.format.GeoJSON();
var features_JaringanJalanKudus_9 = format_JaringanJalanKudus_9.readFeatures(json_JaringanJalanKudus_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanJalanKudus_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalanKudus_9.addFeatures(features_JaringanJalanKudus_9);
var lyr_JaringanJalanKudus_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanJalanKudus_9, 
                style: style_JaringanJalanKudus_9,
                popuplayertitle: 'Jaringan Jalan Kudus',
                interactive: true,
    title: 'Jaringan Jalan Kudus<br />\
    <img src="styles/legend/JaringanJalanKudus_9_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/JaringanJalanKudus_9_1.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/JaringanJalanKudus_9_2.png" /> Jalan Lokal<br />\
    <img src="styles/legend/JaringanJalanKudus_9_3.png" /> Jalan Lingkungan<br />' });
var group_BatasAdministrasi = new ol.layer.Group({
                                layers: [lyr_BatasKabupaten_2,lyr_BatasKecamatan_3,],
                                fold: "open",
                                title: 'Batas Administrasi'});

lyr_GoogleHybrid_0.setVisible(true);lyr_KabupatenKudus_1.setVisible(true);lyr_BatasKabupaten_2.setVisible(true);lyr_BatasKecamatan_3.setVisible(true);lyr_TitikAirBersih_4.setVisible(true);lyr_TitikPasar_5.setVisible(true);lyr_TitikPersampahan_6.setVisible(true);lyr_TitikHalte_7.setVisible(true);lyr_TitikTerminal_8.setVisible(true);lyr_JaringanJalanKudus_9.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_KabupatenKudus_1,group_BatasAdministrasi,lyr_TitikAirBersih_4,lyr_TitikPasar_5,lyr_TitikPersampahan_6,lyr_TitikHalte_7,lyr_TitikTerminal_8,lyr_JaringanJalanKudus_9];
lyr_KabupatenKudus_1.set('fieldAliases', {'NAMA_DESA': 'Desa', 'NAMA_KEC': 'Kecamatan', 'NAMA_KAB': 'Kabupaten', 'NAMA_PROP': 'Provinsi', });
lyr_BatasKabupaten_2.set('fieldAliases', {'NAMA_DESA': 'Desa', 'NAMA_KEC': 'Kecamatan', 'NAMA_KAB': 'Kabupaten', 'NAMA_PROP': 'Provinsi', });
lyr_BatasKecamatan_3.set('fieldAliases', {'NAMA_DESA': 'Desa', 'NAMA_KEC': 'Kecamatan', 'NAMA_KAB': 'Kabupaten', 'NAMA_PROP': 'Provinsi', });
lyr_TitikAirBersih_4.set('fieldAliases', {'Name': 'Titik Air Bersih', 'URL Gambar': 'Gambar', 'URL alamat': 'Alamat', });
lyr_TitikPasar_5.set('fieldAliases', {'Name': 'Titik Pasar', 'URL Gambar': 'Gambar', 'URL Alamat': 'Alamat', });
lyr_TitikPersampahan_6.set('fieldAliases', {'Name': 'Titik Persampahan', 'URL Gambar': 'Gambar', 'URL Alamat': 'Alamat', });
lyr_TitikHalte_7.set('fieldAliases', {'Name': 'Titik Halte', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Gambar': 'Gambar', 'Alamat': 'Alamat', });
lyr_TitikTerminal_8.set('fieldAliases', {'Name': 'Titik Terminal', 'Gambar': 'Gambar', 'Alamat': 'Alamat', });
lyr_JaringanJalanKudus_9.set('fieldAliases', {'name': 'Jaringan Jalan', 'NAMRJL': 'Jaringan Jalan', 'Jaringan J': 'Jaringan Jalan', });
lyr_KabupatenKudus_1.set('fieldImages', {'NAMA_DESA': 'TextEdit', 'NAMA_KEC': 'TextEdit', 'NAMA_KAB': 'TextEdit', 'NAMA_PROP': 'TextEdit', });
lyr_BatasKabupaten_2.set('fieldImages', {'NAMA_DESA': 'TextEdit', 'NAMA_KEC': 'TextEdit', 'NAMA_KAB': 'TextEdit', 'NAMA_PROP': 'TextEdit', });
lyr_BatasKecamatan_3.set('fieldImages', {'NAMA_DESA': 'TextEdit', 'NAMA_KEC': 'TextEdit', 'NAMA_KAB': 'TextEdit', 'NAMA_PROP': 'TextEdit', });
lyr_TitikAirBersih_4.set('fieldImages', {'Name': 'TextEdit', 'URL Gambar': 'TextEdit', 'URL alamat': 'TextEdit', });
lyr_TitikPasar_5.set('fieldImages', {'Name': 'TextEdit', 'URL Gambar': 'TextEdit', 'URL Alamat': 'TextEdit', });
lyr_TitikPersampahan_6.set('fieldImages', {'Name': 'TextEdit', 'URL Gambar': 'TextEdit', 'URL Alamat': 'TextEdit', });
lyr_TitikHalte_7.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Gambar': 'TextEdit', 'Alamat': 'TextEdit', });
lyr_TitikTerminal_8.set('fieldImages', {'Name': 'TextEdit', 'Gambar': 'TextEdit', 'Alamat': 'TextEdit', });
lyr_JaringanJalanKudus_9.set('fieldImages', {'name': 'TextEdit', 'NAMRJL': 'TextEdit', 'Jaringan J': 'TextEdit', });
lyr_KabupatenKudus_1.set('fieldLabels', {'NAMA_DESA': 'no label', 'NAMA_KEC': 'no label', 'NAMA_KAB': 'no label', 'NAMA_PROP': 'no label', });
lyr_BatasKabupaten_2.set('fieldLabels', {'NAMA_DESA': 'no label', 'NAMA_KEC': 'no label', 'NAMA_KAB': 'no label', 'NAMA_PROP': 'no label', });
lyr_BatasKecamatan_3.set('fieldLabels', {'NAMA_DESA': 'no label', 'NAMA_KEC': 'no label', 'NAMA_KAB': 'no label', 'NAMA_PROP': 'no label', });
lyr_TitikAirBersih_4.set('fieldLabels', {'Name': 'no label', 'URL Gambar': 'no label', 'URL alamat': 'no label', });
lyr_TitikPasar_5.set('fieldLabels', {'Name': 'no label', 'URL Gambar': 'no label', 'URL Alamat': 'no label', });
lyr_TitikPersampahan_6.set('fieldLabels', {'Name': 'no label', 'URL Gambar': 'no label', 'URL Alamat': 'no label', });
lyr_TitikHalte_7.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Gambar': 'no label', 'Alamat': 'no label', });
lyr_TitikTerminal_8.set('fieldLabels', {'Name': 'no label', 'Gambar': 'no label', 'Alamat': 'no label', });
lyr_JaringanJalanKudus_9.set('fieldLabels', {'name': 'no label', 'NAMRJL': 'no label', 'Jaringan J': 'no label', });
lyr_JaringanJalanKudus_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});