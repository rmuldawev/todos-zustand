import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },

  title: {
    flexDirection: 'column',
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  checkbox: {
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 50,
    height: 24,
    width: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkIcon: {
    backgroundColor: 'black',
    borderRadius: 50,
    height: 20,
    width: 20,
  },

  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
});
