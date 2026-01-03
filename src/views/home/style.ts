import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6FA',
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  /* ===== Header ===== */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 20,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1A1A1A',
  },

  menuButton: {
    position: 'absolute',
    right: 0,
    padding: 10,
  },

  menuIcon: {
    fontSize: 22,
    color: '#1A1A1A',
  },

  /* ===== Title ===== */
  title: {
    textAlign: 'center',
    fontSize: 16,
    color: '#555',
    marginBottom: 25,
  },

  /* ===== Info Card ===== */
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 18,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 4,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#1A1A1A',
  },

  cardText: {
    fontSize: 14,
    color: '#444',
    lineHeight: 22,
  },

  /* ===== Primary Button ===== */
  primaryButton: {
    backgroundColor: '#2563EB',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#2563EB',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },

  /* ===== Footer ===== */
  footerText: {
    textAlign: 'center',
    fontSize: 13,
    color: '#777',
    marginTop: 'auto',
    marginBottom: 10,
  },

  /* ===== Menu Modal ===== */
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },

  menuContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginTop: 60,
    marginRight: 15,
    width: 180,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
  },

  menuItem: {
    paddingVertical: 12,
    paddingHorizontal: 15,
  },

  menuText: {
    fontSize: 15,
    color: '#1A1A1A',
  },
});

export default styles;
