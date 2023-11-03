var wms_layers = [];


        var lyr_ESRIWorldImagery_0 = new ol.layer.Tile({
            'title': 'ESRI World Imagery ',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_MergedAffectedMunicipalities_1 = new ol.format.GeoJSON();
var features_MergedAffectedMunicipalities_1 = format_MergedAffectedMunicipalities_1.readFeatures(json_MergedAffectedMunicipalities_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MergedAffectedMunicipalities_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MergedAffectedMunicipalities_1.addFeatures(features_MergedAffectedMunicipalities_1);
var lyr_MergedAffectedMunicipalities_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MergedAffectedMunicipalities_1, 
                style: style_MergedAffectedMunicipalities_1,
                interactive: true,
                title: '<img src="styles/legend/MergedAffectedMunicipalities_1.png" /> Merged Affected Municipalities'
            });
var lyr_PRELIMINARY_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "PRELIMINARY",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/PRELIMINARY_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13480292.679416, 1633316.971497, 13482208.971900, 1634461.143851]
                            })
                        });
var lyr_ESRISECTION12_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "ESRI SECTION 12",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ESRISECTION12_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13482984.252698, 1631484.540718, 13483632.461909, 1632473.832940]
                            })
                        });
var lyr_ESRISECTION11A_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "ESRI SECTION 11-A",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ESRISECTION11A_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13483515.968119, 1629708.437688, 13484712.362310, 1631591.513689]
                            })
                        });
var lyr_ESRISECTION10A_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "ESRI SECTION 10-A",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ESRISECTION10A_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13484072.847225, 1629726.051758, 13484708.415595, 1630695.406374]
                            })
                        });
var lyr_ESRISECTION9A_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "ESRI SECTION 9-A",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ESRISECTION9A_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13484598.074362, 1629257.587967, 13484980.409012, 1629811.344983]
                            })
                        });
var lyr_ESRISECTION9_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "ESRI SECTION 9",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ESRISECTION9_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13484618.227229, 1628829.771693, 13485256.873100, 1629802.221673]
                            })
                        });
var lyr_ESRISECTION78_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "ESRI SECTION 7-8",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ESRISECTION78_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13485142.042987, 1627061.949077, 13486330.812339, 1628927.037007]
                            })
                        });
var lyr_ESRISECTION56_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "ESRI SECTION 5-6",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ESRISECTION56_9.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13486224.957605, 1625288.498459, 13487413.616034, 1627160.681863]
                            })
                        });
var lyr_ESRISECTION4_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "ESRI SECTION 4",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ESRISECTION4_10.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13487306.092380, 1624409.092781, 13487953.855873, 1625387.618529]
                            })
                        });
var lyr_ESRISECTION3_11 = new ol.layer.Image({
                            opacity: 1,
                            title: "ESRI SECTION 3",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ESRISECTION3_11.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13487850.881517, 1623518.183782, 13488495.568996, 1624504.947946]
                            })
                        });
var lyr_ESRISECTION2_12 = new ol.layer.Image({
                            opacity: 1,
                            title: "ESRI SECTION 2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ESRISECTION2_12.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13488394.682428, 1623096.125972, 13489444.430939, 1623622.830577]
                            })
                        });
var lyr_ESRISECTION1_13 = new ol.layer.Image({
                            opacity: 1,
                            title: "ESRI SECTION 1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ESRISECTION1_13.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13489386.751298, 1623122.517007, 13490388.643219, 1623603.100766]
                            })
                        });
var format_DEPTHS_14 = new ol.format.GeoJSON();
var features_DEPTHS_14 = format_DEPTHS_14.readFeatures(json_DEPTHS_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEPTHS_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEPTHS_14.addFeatures(features_DEPTHS_14);
var lyr_DEPTHS_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DEPTHS_14, 
                style: style_DEPTHS_14,
                interactive: true,
                title: 'DEPTHS'
            });
var format_NEWWESTBAY_15 = new ol.format.GeoJSON();
var features_NEWWESTBAY_15 = format_NEWWESTBAY_15.readFeatures(json_NEWWESTBAY_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NEWWESTBAY_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NEWWESTBAY_15.addFeatures(features_NEWWESTBAY_15);
var lyr_NEWWESTBAY_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NEWWESTBAY_15, 
                style: style_NEWWESTBAY_15,
                interactive: true,
                title: '<img src="styles/legend/NEWWESTBAY_15.png" /> NEW WEST BAY'
            });

lyr_ESRIWorldImagery_0.setVisible(true);lyr_MergedAffectedMunicipalities_1.setVisible(true);lyr_PRELIMINARY_2.setVisible(true);lyr_ESRISECTION12_3.setVisible(true);lyr_ESRISECTION11A_4.setVisible(true);lyr_ESRISECTION10A_5.setVisible(true);lyr_ESRISECTION9A_6.setVisible(true);lyr_ESRISECTION9_7.setVisible(true);lyr_ESRISECTION78_8.setVisible(true);lyr_ESRISECTION56_9.setVisible(true);lyr_ESRISECTION4_10.setVisible(true);lyr_ESRISECTION3_11.setVisible(true);lyr_ESRISECTION2_12.setVisible(true);lyr_ESRISECTION1_13.setVisible(true);lyr_DEPTHS_14.setVisible(true);lyr_NEWWESTBAY_15.setVisible(true);
var layersList = [lyr_ESRIWorldImagery_0,lyr_MergedAffectedMunicipalities_1,lyr_PRELIMINARY_2,lyr_ESRISECTION12_3,lyr_ESRISECTION11A_4,lyr_ESRISECTION10A_5,lyr_ESRISECTION9A_6,lyr_ESRISECTION9_7,lyr_ESRISECTION78_8,lyr_ESRISECTION56_9,lyr_ESRISECTION4_10,lyr_ESRISECTION3_11,lyr_ESRISECTION2_12,lyr_ESRISECTION1_13,lyr_DEPTHS_14,lyr_NEWWESTBAY_15];
lyr_MergedAffectedMunicipalities_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM3_EN': 'ADM3_EN', 'ADM3_PCODE': 'ADM3_PCODE', 'ADM3_REF': 'ADM3_REF', 'ADM3ALT1EN': 'ADM3ALT1EN', 'ADM3ALT2EN': 'ADM3ALT2EN', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'layer': 'layer', 'path': 'path', });
lyr_DEPTHS_14.set('fieldAliases', {'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', });
lyr_NEWWESTBAY_15.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_MergedAffectedMunicipalities_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM3_EN': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'ADM3_REF': 'TextEdit', 'ADM3ALT1EN': 'TextEdit', 'ADM3ALT2EN': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'layer': '', 'path': '', });
lyr_DEPTHS_14.set('fieldImages', {'field_1': 'TextEdit', 'field_2': 'TextEdit', 'field_3': 'TextEdit', });
lyr_NEWWESTBAY_15.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_MergedAffectedMunicipalities_1.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'header label', 'ADM3_EN': 'header label', 'ADM3_PCODE': 'no label', 'ADM3_REF': 'no label', 'ADM3ALT1EN': 'no label', 'ADM3ALT2EN': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_DEPTHS_14.set('fieldLabels', {'field_1': 'no label', 'field_2': 'no label', 'field_3': 'no label', });
lyr_NEWWESTBAY_15.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_NEWWESTBAY_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});