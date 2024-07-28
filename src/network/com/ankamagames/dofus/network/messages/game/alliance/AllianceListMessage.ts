import { AllianceFactSheetInformation } from "./../../../types/game/social/AllianceFactSheetInformation";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AllianceListMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9553;

	public alliances: Array<AllianceFactSheetInformation>;

    public constructor()
    {
        super();
        this.alliances = Array<AllianceFactSheetInformation>();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceListMessage(input);
    }

    private deserializeAs_AllianceListMessage(input: ICustomDataInput)
    {
        let _item1: AllianceFactSheetInformation;
        let _alliancesLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _alliancesLen; _i1++)
        {
            _item1 = new AllianceFactSheetInformation();
            _item1.deserialize(input);
            this.alliances.push(_item1);
        }
    }

}