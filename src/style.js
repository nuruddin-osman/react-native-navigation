import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    paddingHorizontal: 10,
    flex: 1,
  },
  heading: {
    fontSize: 36,
    textAlign: 'center',
    fontWeight: '700',
    color: '#FFF',
    backgroundColor: '#4d88ff',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  inputs: {
    fontSize: 20,
    color: '#000033',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: '#293d3d',
    outlineWidth: 0,
    borderWidth: 2,
    marginBottom: 10,
  },
  paddings: {
    paddingVertical: 20,
  },
  card: {
    padding: 20,
    backgroundColor: '#ffffff', // 'gary' এর বদলে সঠিক কালার
    borderLeftWidth: 5,
    borderLeftColor: '#0000ff',
    borderRadius: 10,
    margin: 10, // কার্ডের চারপাশে স্পেস যোগ করা
    shadowColor: '#000000', // হলুদের বদলে বেসিক কালার
    shadowOffset: {
      width: 0,
      height: 2, // হাইট কমিয়ে এনেছি
    },
    shadowOpacity: 0.25, // শ্যাডো ট্রান্সপারেন্সি যোগ করা
    shadowRadius: 3.84, // রেডিয়াস ঠিক করা
    elevation: 5, // অ্যান্ড্রয়েডের জন্য শ্যাডো
  },
});
