import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';

const EVDetailesView = ({navigation}) => {
  const [selectedTab, setSelectedTab] = useState(1);

  // ---------------- DATA ----------------

  const tabs = [
    { id: 1, title: 'Charger' },
    { id: 2, title: 'Details' },
    { id: 3, title: 'Reviews' },
  ];

  const filters = ['Available', 'AC', 'DC'];

  const ratingData = [
    { rating: 5, width: '80%' },
    { rating: 4, width: '60%' },
    { rating: 3, width: '40%' },
    { rating: 2, width: '30%' },
    { rating: 1, width: '10%' },
  ];

  const chargers = [
    {
      id: 1,
      connector: 'CCS-2',
      name: 'Connector Gun A',
      status: 'Available',
      power: 'Upto 60Kwh',
    },
    {
      id: 2,
      connector: 'CCS-2',
      name: 'Connector Gun A',
      status: 'Available',
      power: 'Upto 60Kwh',
    },
  ];

  const reviews = [
    {
      id: 1,
      name: 'Rahul kumar',
      vehicle: 'Mahindra Xuv',
      type: 'charged via APP',
      date: '14 days ago',
    },
    {
      id: 2,
      name: 'Amit kumar',
      vehicle: 'Tata Nexon',
      type: 'charged via APP',
      date: '20 days ago',
    },
    {
      id: 3,
      name: 'Rohit Sharma',
      vehicle: 'MG ZS EV',
      type: 'charged via APP',
      date: '25 days ago',
    },
    {
      id: 4,
      name: 'Vikas Singh',
      vehicle: 'Tata Punch EV',
      type: 'charged via APP',
      date: '30 days ago',
    },
  ];

  // ---------------- COMPONENTS ----------------

  const TabButton = ({ id, title }) => {
    const isSelected = selectedTab === id;

    return (
      <Pressable
        onPress={() => setSelectedTab(id)}
        style={styles.tabContainer}
      >
        <Text
          style={[
            styles.tabText,
            {
              fontWeight: isSelected ? '700' : '400',
            },
          ]}
        >
          {title}
        </Text>

        <View
          style={[
            styles.tabLine,
            {
              backgroundColor: isSelected ? '#205F75' : '#E6EBED',
            },
          ]}
        />
      </Pressable>
    );
  };

  const ChargerCard = ({ item }) => {
    return (
      <View style={styles.chargerInnerCard}>
        <View style={styles.connectorLeft}>
          <Image
            style={styles.evIcon}
            source={require('../MyApp/images/evicon.png')}
          />

          <Text style={styles.normalText}>{item.connector}</Text>
        </View>

        <View style={styles.connectorRight}>
          <Text style={styles.normalText}>{item.name}</Text>

          <View style={styles.statusRow}>
            <View style={styles.availableBadge}>
              <Image
                style={styles.tickIcon}
                source={require('../MyApp/images/tick.png')}
              />

              <Text style={styles.availableText}>
                {item.status}
              </Text>
            </View>

            <View style={styles.powerBadge}>
              <Image
                style={styles.chargeIcon}
                source={require('../MyApp/images/charge.png')}
              />

              <Text style={styles.powerText}>
                {item.power}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const ReviewCard = ({ item }) => {
    return (
      <View style={styles.reviewCard}>
        <View style={styles.reviewLeft}>
          <Image
            style={styles.userImage}
            source={require('../MyApp/images/user.png')}
          />

          <View>
            <Text style={styles.reviewName}>
              {item.name}
            </Text>

            <Text style={styles.reviewType}>
              {item.type}
            </Text>

            <Text style={styles.reviewDate}>
              {item.date}
            </Text>
          </View>
        </View>

        <Text style={styles.vehicleText}>
          {item.vehicle}
        </Text>
      </View>
    );
  };

  // ---------------- HEADER ----------------

  const renderHeader = () => {
    return (
      <>
        {/* Top Header */}

        <View style={styles.header}>
          <TouchableOpacity onPress={()=>{
navigation.goBack()
          }}>
 <Image
            style={styles.backIcon}
            source={require('../MyApp/images/back.png')}
          />
          </TouchableOpacity>
         

          <Text style={styles.headerTitle}>
            EV Details
          </Text>
        </View>

        {/* Hotel Details */}

        <View style={styles.hotelRow}>
          <Text style={styles.hotelTitle}>
            UP | Chand | The Park Green{'\n'}
            Hotel and Resort
          </Text>

          <View style={styles.ratingContainer}>
            <View style={styles.smallRating}>
              <Image
                style={styles.smallRatingIcon}
                source={require('../MyApp/images/rate.png')}
              />

              <Text style={styles.ratingText}>
                4.3
              </Text>
            </View>

            <Text onPress={()=>{
               setSelectedTab(3)
            }} style={styles.reviewsCount}>
              54 Reviews
            </Text>
          </View>
        </View>

        {/* Location */}

        <View style={styles.locationRow}>
          <Image
            style={styles.locationIcon}
            source={require('../MyApp/images/location.png')}
          />

          <Text style={styles.locationText}>
            The park green hotel resort NH24 Godhra
          </Text>
        </View>

        {/* Open */}

        <View style={styles.openRow}>
          <View style={styles.openItem}>
            <Image
              style={styles.tickIcon}
              source={require('../MyApp/images/tick.png')}
            />

            <Text style={styles.openText}>
              Open Now
            </Text>
          </View>

          <View style={styles.openItem}>
            <Image
              style={styles.dotIcon}
              source={require('../MyApp/images/Ellipse.png')}
            />

            <Text style={styles.hoursText}>
              24 Hours
            </Text>
          </View>
        </View>

        {/* Offer */}

        <View style={styles.offerRow}>
          <Image
            style={styles.offerIcon}
            source={require('../MyApp/images/offer.png')}
          />

          <View>
            <Text style={styles.offerTitle}>
              FLAT 10% OFF with MILES
            </Text>

            <Text style={styles.offerSubTitle}>
              1 offer available
            </Text>
          </View>
        </View>

        {/* Tabs */}

        <View style={styles.tabsContainer}>
          {tabs.map(tab => (
            <TabButton
              key={tab.id}
              id={tab.id}
              title={tab.title}
            />
          ))}
        </View>
      </>
    );
  };

  // ---------------- CHARGER TAB ----------------

  const renderChargerTab = () => {
    return (
      <View>
        {/* Filters */}

        <View style={styles.filterContainer}>
          {filters.map(item => (
            <Text
              key={item}
              style={styles.filter}
            >
              {item}
            </Text>
          ))}
        </View>

        <Text style={styles.sectionTitle}>
          Charger with offer
        </Text>

        {/* Main Charger */}

        <View style={styles.chargerCard}>
          <Text style={styles.chargerTitle}>
            TCZ UP | Chand | The Park Green Hotel and Resort
          </Text>

          <View style={styles.chargerInfoRow}>
            <Text style={styles.normalText}>
              DC | 60kw
            </Text>

            <Text style={styles.normalText}>
              Last charged 11 hours ago
            </Text>
          </View>

          <Text style={styles.normalText}>
            Flat 10% off
          </Text>

          <Text style={styles.priceText}>
            GNF 21.5/kwh
          </Text>

          {/* Connector Cards */}

          {chargers.map(item => (
            <ChargerCard
              key={item.id}
              item={item}
            />
          ))}
        </View>

        {/* Select Button */}

        <Pressable onPress={()=>{
          navigation.navigate('plugincharge')
        }} style={styles.selectButton}>
          <Text style={styles.selectButtonText}>
            Select a connector
          </Text>
        </Pressable>
      </View>
    );
  };

  // ---------------- DETAILS TAB ----------------

  const renderDetailsTab = () => {
    return (
      <View style={styles.detailsContainer}>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 28.6139,
              longitude: 77.2090,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }}
          >
            <Marker
              coordinate={{
                latitude: 28.6139,
                longitude: 77.2090,
              }}
              title="New Delhi"
              description="This is my marker"
            />
          </MapView>
        </View>

        <Text style={styles.mapTitle}>
          UP | Chand | The Park Green Hotel and Resort
        </Text>
      </View>
    );
  };

  // ---------------- REVIEWS TAB ----------------

  const renderReviewsTab = () => {
    return (
      <View style={styles.reviewsContainer}>

        <Text style={styles.sectionTitle}>
          Rating and reviews
        </Text>

        {/* Rating Summary */}

        <View style={styles.ratingSummary}>

          {/* Left Rating */}

          <View>
            <Text style={styles.bigRating}>
              4.5
            </Text>

            <Image
              style={styles.bigRatingIcon}
              source={require('../MyApp/images/rate.png')}
            />

            <Text style={styles.totalReviews}>
              54 Reviews
            </Text>
          </View>

          {/* Rating Bars */}

          <View style={styles.ratingBars}>
            {ratingData.map(item => (
              <View
                key={item.rating}
                style={styles.ratingBarRow}
              >
                <Text style={styles.ratingNumber}>
                  {item.rating}
                </Text>

                <Image
                  style={styles.ratingBarIcon}
                  source={require('../MyApp/images/rate.png')}
                />

                <View style={styles.ratingTrack}>
                  <View
                    style={[
                      styles.ratingProgress,
                      {
                        width: item.width,
                      },
                    ]}
                  />
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Customer Photos */}

        <Text style={styles.sectionTitle}>
          Customer Photos
        </Text>

        <Image
          style={styles.customerPhoto}
          source={require('../MyApp/images/car.png')}
        />

        {/* Customer Reviews */}

        <Text style={styles.sectionTitle}>
          Customer Reviews
        </Text>

        {reviews.map(item => (
          <ReviewCard
            key={item.id}
            item={item}
          />
        ))}
      </View>
    );
  };

  // ---------------- MAIN RETURN ----------------

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {renderHeader()}

          {selectedTab === 1 && renderChargerTab()}

          {selectedTab === 2 && renderDetailsTab()}

          {selectedTab === 3 && renderReviewsTab()}
        </ScrollView>

      </View>
    </SafeAreaView>
  );
};

export default EVDetailesView;

// =====================================================
// STYLES
// =====================================================

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  container: {
    flex: 1,
    marginHorizontal: 20,
  },

  scrollContent: {
    paddingBottom: 30,
  },

  // HEADER

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },

  backIcon: {
    height: 35,
    width: 35,
  },

  headerTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },

  // HOTEL

  hotelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 18,
  },

  hotelTitle: {
    fontWeight: '700',
    fontSize: 15,
    width: '60%',
  },

  ratingContainer: {
    alignItems: 'flex-start',
  },

  smallRating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  smallRatingIcon: {
    height: 15,
    width: 15,
  },

  ratingText: {
    fontWeight: '500',
    fontSize: 14,
    color: '#073714',
  },

  reviewsCount: {
    fontWeight: '600',
    fontSize: 14,
    textDecorationLine: 'underline',
    color: '#BDBDBD',
    marginTop: 13,
  },

  // LOCATION

  locationRow: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },

  locationIcon: {
    height: 19,
    width: 15,
  },

  locationText: {
    fontWeight: '400',
    fontSize: 15,
    color: '#2B2B2B',
    flex: 1,
  },

  // OPEN

  openRow: {
    flexDirection: 'row',
    marginVertical: 13,
  },

  openItem: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginRight: 20,
  },

  openText: {
    fontWeight: '500',
    fontSize: 14,
    color: '#059669',
  },

  hoursText: {
    fontWeight: '500',
    fontSize: 14,
    color: '#3F3C3C',
  },

  dotIcon: {
    height: 10,
    width: 10,
  },

  // OFFER

  offerRow: {
    flexDirection: 'row',
    gap: 17,
    marginVertical: 17,
  },

  offerIcon: {
    height: 35,
    width: 30,
  },

  offerTitle: {
    fontWeight: '400',
    fontSize: 16,
    color: '#2B2B2B',
  },

  offerSubTitle: {
    fontWeight: '400',
    fontSize: 14,
    color: '#205F75',
    marginTop: 4,
  },

  // TABS

  tabsContainer: {
    flexDirection: 'row',
    marginTop: 25,
  },

  tabContainer: {
    flex: 1,
    gap: 10,
  },

  tabText: {
    fontSize: 17,
    color: '#205F75',
    textAlign: 'center',
  },

  tabLine: {
    height: 3,
  },

  // FILTER

  filterContainer: {
    flexDirection: 'row',
    gap: 15,
    marginVertical: 17,
  },

  filter: {
    fontWeight: '700',
    fontSize: 14,
    color: '#205F75',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 10,
  },

  // GENERAL

  sectionTitle: {
    fontWeight: '700',
    fontSize: 17,
    color: '#205F75',
    marginVertical: 10,
  },

  normalText: {
    fontWeight: '400',
    fontSize: 14,
    color: '#1F2121',
  },

  // CHARGER

  chargerCard: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 13,
    marginTop: 12,
  },

  chargerTitle: {
    fontWeight: '700',
    fontSize: 17,
    color: '#1F2121',
    marginTop: 12,
  },

  chargerInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },

  priceText: {
    fontWeight: '800',
    fontSize: 14,
    color: '#205F75',
    marginTop: 10,
  },

  chargerInnerCard: {
    marginHorizontal: 5,
    backgroundColor: '#F5F5F5',
    padding: 19,
    marginTop: 15,
    borderRadius: 16,
    flexDirection: 'row',
    gap: 20,
  },

  connectorLeft: {
    alignItems: 'center',
    gap: 10,
  },

  evIcon: {
    height: 35,
    width: 30,
  },

  connectorRight: {
    justifyContent: 'center',
    gap: 10,
    flex: 1,
  },

  statusRow: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },

  availableBadge: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    padding: 11,
    backgroundColor: '#A7F3D0',
    borderRadius: 20,
  },

  powerBadge: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    padding: 11,
    backgroundColor: '#A3D4E6',
    borderRadius: 20,
  },

  tickIcon: {
    height: 18,
    width: 18,
  },

  chargeIcon: {
    height: 18,
    width: 8,
  },

  availableText: {
    fontWeight: '500',
    fontSize: 14,
    color: '#059669',
  },

  powerText: {
    fontWeight: '500',
    fontSize: 14,
    color: '#205F75',
  },

  selectButton: {
    backgroundColor: '#205F75',
    height: 45,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    marginVertical: 20,
  },

  selectButtonText: {
    fontWeight: '700',
    fontSize: 17,
    color: '#E8EDED',
  },

  // MAP

  detailsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },

  mapContainer: {
    width: '40%',
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
  },

  map: {
    width: '100%',
    height: '100%',
  },

  mapTitle: {
    flex: 1,
    fontWeight: '700',
    fontSize: 17,
    color: '#205F75',
    textAlign: 'center',
    marginLeft: 10,
  },

  // REVIEWS

  reviewsContainer: {
    marginTop: 20,
  },

  ratingSummary: {
    flexDirection: 'row',
    marginVertical: 15,
  },

  bigRating: {
    fontWeight: '700',
    fontSize: 17,
    color: '#205F75',
  },

  bigRatingIcon: {
    height: 25,
    width: 25,
    marginTop: 12,
  },

  totalReviews: {
    fontWeight: '700',
    fontSize: 17,
    color: '#808080',
    marginTop: 39,
  },

  ratingBars: {
    gap: 8,
    marginLeft: 40,
    flex: 1,
  },

  ratingBarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  ratingNumber: {
    fontWeight: '700',
    fontSize: 15,
    color: '#080909',
    width: 10,
  },

  ratingBarIcon: {
    height: 15,
    width: 15,
  },

  ratingTrack: {
    height: 6,
    borderRadius: 15,
    backgroundColor: '#D9D9D9',
    flex: 1,
    overflow: 'hidden',
  },

  ratingProgress: {
    height: '100%',
    backgroundColor: '#205F75',
    borderRadius: 15,
  },

  customerPhoto: {
    height: 95,
    width: 95,
    marginTop: 6,
    borderRadius: 8,
  },

  // REVIEW CARD

  reviewCard: {
    minHeight: 100,
    backgroundColor: 'white',
    marginBottom: 9,
    borderRadius: 15,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  reviewLeft: {
    flexDirection: 'row',
  },

  userImage: {
    height: 45,
    width: 45,
    marginRight: 15,
  },

  reviewName: {
    fontWeight: '700',
    fontSize: 17,
    color: '#205F75',
    marginVertical: 6,
  },

  reviewType: {
    fontWeight: '500',
    fontSize: 14,
    color: '#205F75',
    marginBottom: 5,
  },

  reviewDate: {
    fontWeight: '400',
    fontSize: 14,
    color: '#205F75',
  },

  vehicleText: {
    fontWeight: '400',
    fontSize: 14,
    color: '#205F75',
  },
});