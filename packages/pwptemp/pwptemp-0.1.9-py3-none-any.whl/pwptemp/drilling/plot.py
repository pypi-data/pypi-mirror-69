import matplotlib.pyplot as plt


def behavior(Behavior):
    """
    Plotting Tbottom and Tout through time
    """

    from numpy import polyfit, poly1d

    time = Behavior.time

    tbot_smooth = polyfit(time, Behavior.tbot, 14)
    tbot = poly1d(tbot_smooth)(time)

    tout_smooth = polyfit(time, Behavior.tout, 14)
    tout = poly1d(tout_smooth)(time)
    plt.plot(time, tbot, 'b', label='Bottom')  # Temp. inside Annulus vs Time
    plt.plot(time, tout, 'r', label='Outlet (Annular)')  # Temp. inside Annulus vs Time
    plt.axhline(y=Behavior.tfm[-1], color='k', label='Formation')  # Formation Temp. vs Time
    plt.xlim(0, Behavior.finaltime)
    plt.xlabel('Time, h')
    plt.ylabel('Temperature, °C')
    title = 'Temperature behavior (%1.1f hours)' % Behavior.finaltime
    plt.title(title)
    plt.legend()  # applying the legend
    plt.show()


def profile(temp_distribution, tdsi=True, ta=True, tr=False, tcsg=False, tfm=True, sr=False, units='metric'):

    # Plotting Temperature PROFILE
    md = temp_distribution.md
    if units == 'english':
        md = [i * 3.28 for i in md]
    riser = temp_distribution.riser
    csg = temp_distribution.csgs_reach
    if tdsi:
        plt.plot(temp_distribution.tdsi, md, c='r', label='Fluid in Drill String')  # Temp. inside Drillpipe vs Depth
    if ta:
        plt.plot(temp_distribution.ta, md, 'b', label='Fluid in Annulus')
    if riser > 0 and tr:
        plt.plot(temp_distribution.tr, md, 'g', label='Riser')  # Temp. due to gradient vs Depth
    if csg > 0 and tcsg:
        plt.plot(temp_distribution.tcsg, md, 'c', label='Casing')  # Temp. due to gradient vs Depth
    if tfm:
        plt.plot(temp_distribution.tfm, md, color='k', label='Formation')  # Temp. due to gradient vs Depth
    if sr:
        # Temp. due to gradient vs Depth
        plt.plot(temp_distribution.tsr, md, c='0.6', ls='-', marker='', label='Surrounding Space')
    if units == 'metric':
        plt.xlabel('Temperature, °C')
        plt.ylabel('Depth, m')
    else:
        plt.xlabel('Temperature, °F')
        plt.ylabel('Depth, ft')
    title = 'Temperature Profile at %1.1f hours' % temp_distribution.time
    plt.title(title)
    plt.ylim(0, md[-1])     # bottom and top limits
    plt.ylim(plt.ylim()[::-1])  # reversing y axis
    plt.legend()  # applying the legend
    plt.grid()
    plt.show()


def profile_multitime(temp_dist, values, times, tdsi=True, ta=False, tr=False, tcsg=False, tfm=True, tsr=False):
    md = temp_dist.md
    riser = temp_dist.riser
    csg = temp_dist.csgs_reach
    if tfm:
        plt.plot(temp_dist.tfm, md, color='k', label='Formation - Initial')  # Temp. due to gradient vs Depth

    color = ['r', 'b', 'g', 'c', '0.4', '0.9', '0.6', '0.8', '0.2', 'r', 'b', 'g', 'c', '0.4', '0.9', '0.6', '0.8']
    if len(values) > len(color):
        color = color * round((len(values) / len(color)))
    for x in range(len(values)):
        # Plotting Temperature PROFILE
        if tdsi:
            plt.plot(values[x].tdsi, md, c=color[x], label='Fluid in Drill String at %1.1f hours' % times[x])
        if ta:
            plt.plot(values[x].ta, md, c=color[x], label='Fluid in Annulus at %1.1f hours' % times[x])
        if riser > 0 and tr:
            plt.plot(values[x].tr, md, c=color[x], label='Riser at %1.1f hours' % times[x])
        if csg > 0 and tcsg:
            plt.plot(values[x].tcsg, md, c=color[x], label='Casing at %1.1f hours' % times[x])
        if tsr:
            # Temp. due to gradient vs Depth
            plt.plot(values[x].tsr, md, c=color[x], ls='-', marker='', label='Surrounding Space')
    plt.xlabel('Temperature, °C')
    plt.ylabel('Depth, m')
    title = 'Temperature Profiles'
    plt.title(title)
    plt.ylim(plt.ylim()[::-1])  # reversing y axis
    plt.legend()  # applying the legend
    plt.show()


def plot_torque_drag(well, plot='torque'):
    if plot == 'torque' or plot == 'both':
        plt.plot(well.torque[0], well.md, label='Lowering')
        plt.plot(well.torque[1], well.md, label='Rotating')
        plt.plot(well.torque[2], well.md, label='Hoisting')
        plt.xlabel('Torque, kNm')
        plt.ylabel('Depth, m')
        plt.ylim(0, well.md[-1])  # bottom and top limits
        plt.xlim(0, well.torque[2][0]+0.5)  # bottom and top limits
        plt.ylim(plt.ylim()[::-1])  # reversing y axis
        plt.legend()  # applying the legend
        plt.grid()
        plt.show()
    if plot == 'drag' or plot == 'both':
        plt.plot(well.drag[0], well.md, label='Lowering')
        plt.plot(well.drag[1], well.md, label='Rotating')
        plt.plot(well.drag[2], well.md, label='Hoisting')
        plt.xlabel('Drag Force, kN')
        plt.ylabel('Depth, m')
        plt.ylim(0, well.md[-1])  # bottom and top limits
        plt.xlim(0, well.drag[2][0]+10)  # bottom and top limits
        plt.ylim(plt.ylim()[::-1])  # reversing y axis
        plt.legend()  # applying the legend
        plt.grid()
        plt.show()

